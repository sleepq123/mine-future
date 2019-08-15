import { createState, combineReducers } from 'redux';
import reducer01  from './reducer01';

const reducers = combineReducers({
    reducer01
})

const store = createState(reducers);

export default store;