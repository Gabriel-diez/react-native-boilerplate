import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_SUCCESS:
            return { user: action.payload, loading: false };
        case LOGIN_FAIL:
            return { ...state, error: 'Identifiants incorrects', loading: false };
        case CREATE_USER:
            return { ...state, loading: true, error: '' };
        case CREATE_USER_SUCCESS:
            return { ...state, loading: false };
        case CREATE_USER_FAIL:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
