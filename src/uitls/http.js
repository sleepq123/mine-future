/** 封装http库的地方 */
import Axios from 'axios';
import Qs from 'qs';
import { message } from 'antd';
import { history } from '@src/app';

export const baseURL = process.env.targetUrl || '/proxy';

const getToken = (name = 'token') => window.localStorage.getItem(name);

// 创建自定义axios实例
const httpInstance = Axios.create({
    baseURL,
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    transformRequest: [(data, headers) => {
        return JSON.stringify(data);
    },],
    responseType: 'json',
    paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
})

/**
 * 1001	成功标识	
 * 1002	参数有误	
 * 1003	未登录 / 令牌失效	
 * 1005	返回错误	
 * 2000	没有权限	
 */
// 添加响应请求拦截器
axios.interceptors.response.use((res) => {
    if (res.responseType === 'blod') return res;
    switch (res.data.code) {
        case 1001:
            return res;
        case 1003:
            localStorage.removeItem('token');
            history.push('/login');
            break;
        default:
            message.error(res.data.msg);
            break;
    }

    return res;
}, function (error) {
    return Promise.reject(error);
});


const request = {};

request.get = (url, data = {}, config = {}) => {
    config.header = {
        ...config.header,
        'Authorization': getToken(),
    };
    httpInstance.get(url, data, config)
        .then(res => res.data
        )
}

request.post = (url, data = {}, config = {}) => {
    config.header = {
        ...config.header,
        'Authorization': getToken(),
    };
    httpInstance.post(url, data, config)
        .then((res) => {
            return config.responseType === 'blod' ? res : res.data;
        })

}

export default request;