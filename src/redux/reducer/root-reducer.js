import { combineReducers } from 'redux';

import listReducer from './reducerList'

const rootReducer = combineReducers({

    listBlog: listReducer,
});

export default rootReducer;