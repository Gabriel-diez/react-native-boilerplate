import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
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
        default:
            return state;
    }
};
