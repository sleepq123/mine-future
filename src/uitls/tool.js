/** 编写工具的地方 */
import request from '@src/uitls/http';

/**
 * api 接口工具函数
 * @param  app  { Object }    请求路由对象
 * @example   { login: '/login' }
 */
export function getApiData(app) {
    const apiData = {}
    for (const key in app) {
        apiData[key] = params => {
            // 判断传入参数对象 params
            if (
                Object.prototype.toString.call(params) === '[object FormData]'
            ) {
                return request.post(app[key], params, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    transformRequest: [data => data]
                })
            }
            // 判断 key 对应值
            if (typeof app[key] === 'object') {
                return fileExport(app[key].url, app[key].name, params)
            } else if (typeof app[key] === 'string') {
                return request.post(app[key], params)
            }
        }
    }
    return apiData;
}

/** 导出 */
export function fileExport(url, fileName, params) {
    request
        .post(url, params, {
            responseType: 'blob',
            isBlobRequest: true
        })
        .then(res => {
            const content = res.data;
            const blob = new Blob([content]);
            if ('download' in document.createElement('a')) {
                // 非IE下载
                const elink = document.createElement('a');
                elink.download = fileName;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
            } else {
                // IE10+下载
                navigator.msSaveBlob(blob, fileName);
            }
        })
        .catch(e => console.error(e));
}
