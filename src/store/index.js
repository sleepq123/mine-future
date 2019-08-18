/** 全局状态管理 */
import { createStore, combineReducers } from 'redux';
import userInfo from './userInfo';
import reducer01  from './reducer01';

const reducers = combineReducers({
    userInfo,
    reducer01,
})

const store = createStore(reducers);

export default store;