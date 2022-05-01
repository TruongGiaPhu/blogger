import axios from 'axios';

const loadUser = (data) => {
    return {
        type: 'LOAD_USER',
        payload: data,
    };
};

export const dangnhap = (login) => {
    return {
        type: 'LOGIN',
        payload: login,
    };
};

const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: id,
    };
};

const updateUser = (data) => {
    return {
        type: 'UPDATE_USER',
        payload: data,
    };
};

export const clearUser = () => {
    return {
        type: 'CLEAR_USER',
    };
};

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get('http://localhost:5000/User')
            .then((res) => {
                dispatch(loadUser(res.data));
                // console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
};

export const getUserById = (id) => {
    return function (dispatch) {
        axios
            .get(`http://localhost:5000/User/${id}`)
            .then((res) => {
                dispatch(getUser(res.data));
            })
            .catch((err) => console.log(err));
    };
};

export const updateUserById = (id, data) => {
    return function (dispatch) {
        axios
            .put(`http://localhost:5000/User/${id}`, data)
            .then((res) => {
                dispatch(updateUser(res.data));
                dispatch(getUser(res.data));
            })
            .catch((err) => console.log(err));
    };
};
