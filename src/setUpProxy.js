const proxy = require('http-proxy-middleware');

// const target = 'http://www.sleepq123.top/api';
const target = 'http://localhost:5000/api';

module.exports = function (app) {
    app.use(proxy('/proxy', {
        target,
        changeOrigin: true,
        'pathRewrite': {
            '^/proxy': ''
        },
    }));
};