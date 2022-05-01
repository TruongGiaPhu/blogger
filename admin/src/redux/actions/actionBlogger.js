import * as types from './actionType';
import axios from 'axios';

const loadBlogger = (blog) => {
    return {
        type: types.LOAD_BLOGGER,
        payload: blog,
    };
};

const getBlogger = (id) => {
    return {
        type: types.GET_BLOGGER,
        payload: id,
    };
};

const searchFilter = (search) => {
    return {
        type: types.SEARCH_BLOGGER,
        payload: search,
    };
};

const deleteBlogger = (id) => {
    return {
        type: types.DELETE_BLOGGER,
        payload: id,
    };
};

const addBlogger = (blog) => {
    return {
        type: types.ADD_BLOGGER,
        payload: blog,
    };
};

const updateBlogger = (blog) => {
    return {
        type: types.EDIT_BLOGGER,
        payload: blog,
    };
};

export const loadBloggers = () => {
    return function (dispatch) {
        console.log(process.env.REACT_APP_API_BLOGGER);
        axios
            .get(`http://localhost:5000/Blogger`)

            .then((response) => {
                dispatch(loadBlogger(response.data));
            })
            .catch((error) => {
                console.log('error', error);
            });
    };
};

export const getBloggerById = (id) => {
    return function (dispatch) {
        axios
            .get(`http://localhost:5000/Blogger/${id}`)
            .then((response) => {
                dispatch(getBlogger(response.data));
            })
            .catch((error) => {
                console.log('error', error);
            });
    };
};

export const upDateBloggers = (blog, id) => {
    return function (dispatch) {
        axios
            .put(`http://localhost:5000/Blogger/${id}`, blog)
            .then((response) => {
                dispatch(updateBlogger(response.data));
            })
            .catch((error) => {
                console.log('error', error);
            });
    };
};

export const searchBlogger = (search) => {
    return function (dispatch) {
        dispatch(searchFilter(search));
    };
};

export const deleteBloggerById = (id) => {
    return function (dispatch) {
        axios
            .delete(`http://localhost:5000/Blogger/${id}`)
            .then((response) => {
                dispatch(deleteBlogger(response.data));
                dispatch(loadBloggers());
            })
            .catch((error) => {
                console.log('error', error);
            });
    };
};

export const addBloggers = (blog) => {
    return function (dispatch) {
        axios
            .post(`http://localhost:5000/Blogger`, blog)
            .then((response) => {
                dispatch(addBlogger(response.data));
                // dispatch(loadBloggers());
            })
            .catch((error) => {
                console.log('error', error);
            });
    };
};
