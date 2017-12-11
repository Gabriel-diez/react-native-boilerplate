import AuthReducer from '../../src/reducers/AuthReducer';
import {
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_USER,
} from '../../src/actions/types';

const initialState = {
    user: null,
    error: '',
    loading: false,
};

describe('AuthReducer', () => {
    it('Create user action', () => {
        const action = { type: CREATE_USER };
        expect(AuthReducer(undefined, action)).toEqual({ ...initialState, loading: true, error: '' });
    });

    it('Create user success action', () => {
        const action = { type: CREATE_USER_SUCCESS, payload: {} };
        expect(AuthReducer(undefined, action)).toEqual({ user: {}, loading: false, error: '' });
    });

    it('Create user fail action', () => {
        const action = { type: CREATE_USER_FAIL, payload: 'auth/email-already-in-use' };
        expect(AuthReducer(undefined, action)).toEqual({ ...initialState, loading: false, error: 'Email already use' });
    });

    it('Login user action', () => {
        const action = { type: LOGIN_USER };
        expect(AuthReducer(undefined, action)).toEqual({ ...initialState, loading: true, error: '' });
    });

    it('Login user success action', () => {
        const action = { type: LOGIN_SUCCESS, payload: {} };
        expect(AuthReducer(undefined, action)).toEqual({ ...initialState, user: {} });
    });

    it('Login user failed action', () => {
        const action = { type: LOGIN_FAIL, payload: 'Email or password invalid' };
        expect(AuthReducer(undefined, action)).toEqual({ ...initialState, error: 'Email or password invalid' });
    });

    it('Initial State', () => {
        expect(AuthReducer(undefined, {})).toEqual(initialState);
    });
});
