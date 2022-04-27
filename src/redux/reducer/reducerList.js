import * as types from '../actions/actionType';

const initState = {
    list: [],
    blog: {},
    error: null,
    search: ''
}

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_BLOGGER:
            return {
                ...state,
                list: action.payload,
                error: null
            }
        case types.GET_BLOGGER:
            return {
                ...state,
                blog: action.payload,
                error: null
            }
        case types.SEARCH_BLOGGER:
            return {
                ...state,
                search: action.payload,
                error: null
            }
        default:
            return state;
    }
}

export default listReducer;