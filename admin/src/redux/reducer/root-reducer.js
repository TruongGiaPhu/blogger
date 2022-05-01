import { combineReducers } from 'redux';

import listReducer from './reducerList';
import loginReducer from './reducerLogin';

const rootReducer = combineReducers({
    listBlog: listReducer,
    login: loginReducer,
});

export default rootReducer;
