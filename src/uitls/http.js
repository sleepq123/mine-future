import axios from 'axios'
import { message } from 'antd'
import { history } from '@src/App.js'

const TARGETURL = process.env.VUE_APP_TARGETURL || '/proxy'
const baseURL = TARGETURL.trim()

const request = {}
const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
})

/**
 * 1001	成功标识	
 * 1002	参数有误	
 * 1003	未登录 / 令牌失效	
 * 1005	返回错误	
 * 2000	没有权限	
 */

// 防止发送多次请求
const CancelToken = axios.CancelToken; // 取消请求
let pending = [];

instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token') || sessionStorage.getItem('token')

    console.log(pending);
    
    const cancelFlag = pending.some((item) => {
        return item === config.url;
    });

    if (!cancelFlag) {
        pending.push(config.url);
    } else {        
        let cancel;
        config.cancelToken = new CancelToken((c) => {
            cancel = c;
        });
        
        cancel(); // 取消请求
    }
    return config;
})
instance.interceptors.response.use((res) => {
    pending = pending.filter((item) => {
        return baseURL + item !== res.config.url;
    })
    
    if (res.data.code === 1003 || res.data.code === 2000) {
        message.error(res.data.msg)
        setTimeout(() => {
            history.push('/login')
        }, 200)
    } else if (res.data.code === 1001) {
        return res.data
    } else if (res.data instanceof Blob) {
        return res
    } else {
        message.error(res.data.msg)
        return Promise.reject(res.data)
    }
}, (error) => {
    // 返回接口返回的错误信息
    return Promise.reject(error)
})

request.get = async (url, params) => await instance.get(url, { params })

request.post = async (url, params) => {
    return await instance.post(url, params)
}

const uploader = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    validateStatus: () => true,
    responseType: 'json',
})

uploader.interceptors.request.use((config) => {
    config.headers = {
        'Authorization': localStorage.getItem('token') || sessionStorage.getItem('token'),
    }
    return config;
});

request.postfile = async (url, params) => {
    const res = await uploader.post(url, params)
    if (res.data.code === 1001) {
        return res.data
    } else {
        message.error(res.data.msg)
        return Promise.reject(res.data)
    }
}

/** 导出excel */
request.fileExport = (url, fileName, params) => {
    return instance.post(url, params, {
        responseType: 'blob',
        isBlobRequest: true,
    }).then((res) => {
        const content = res.data
        const blob = new Blob([content])
        if ('download' in document.createElement('a')) { // 非IE下载
            const elink = document.createElement('a')
            elink.download = fileName
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
        } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
        }
    }).catch(e => console.error(e));
}

export { baseURL }
export default request
