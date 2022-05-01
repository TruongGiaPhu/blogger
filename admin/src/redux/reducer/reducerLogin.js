const initState = {
    idUser: '',
    user: {},
    users: [],
    login: false,
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.payload,
            };

        case 'LOAD_USER':
            return {
                ...state,
                users: action.payload,
            };
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'CLEAR_USER':
            return {
                ...state,
                user: {},
                login: false,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((item) =>
                    item.id === action.payload.id ? action.payload : item,
                ),
            };
        default:
            return state;
    }
};

export default loginReducer;
