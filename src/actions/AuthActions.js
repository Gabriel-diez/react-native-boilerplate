import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
} from './types';

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
    });

    Actions.main({ type: 'reset' });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL,
    });
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        const userEmail = email.trim();
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };
};
