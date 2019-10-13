import requst from '@src/uitls/http';

const apiData  = {
    login: (params) => {
        requst.post('/user/login', params);
    },
    userList: (params) => {
        requst.post('/user/list', params);
    }
};

export default apiData;