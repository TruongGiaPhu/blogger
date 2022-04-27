import * as types from './actionType';
import axios from 'axios';



const loadBlogger = (blog) => {
    return {
        type: types.LOAD_BLOGGER,
        payload: blog,
    }
}

const getBlogger = (id) => {
    return {
        type: types.GET_BLOGGER,
        payload: id,
    }
}

const searchFilter = (search) => {
    return {
        type: types.SEARCH_BLOGGER,
        payload: search,
    }
}

export const loadBloggers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_BLOGGER} `)
            .then(response => {
                dispatch(loadBlogger(response.data))
            })
            .catch(error => {
                console.log("error", error);
            })
    }
}

export const getBloggerById = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_BLOGGER}/${id}`)
            .then(response => {
                dispatch(getBlogger(response.data))
            })
            .catch(error => {
                console.log("error", error);
            })
    }
}

export const searchBlogger = (search) => {
    return function (dispatch) {
        dispatch(searchFilter(search))
    }
}

