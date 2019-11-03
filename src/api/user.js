import { getApiData } from '@src/uitls/tool';

const user  = {
    login: '/user/login',
    userList: '/user/list',
};
 
export default getApiData(user);