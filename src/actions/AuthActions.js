import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
} from './types';

/**
 * Redirect to main
 * @param dispatch
 * @param user
 */
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
    });

    Actions.main({ type: 'reset' });
};

/**
 * Return login failed
 * @param dispatch
 */
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL,
    });
};

/**
 * Login user
 * @param email
 * @param password
 * @returns {function(*=)}
 */
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        const userEmail = email.trim();
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };
};

/**
 * Send user create failed message to redux
 * @param dispatch
 * @param error
 */
const createUserFail = (dispatch, error) => {
    let errorMessage;
    switch (error.code) {
        case 'auth/email-already-in-use':
            errorMessage = 'Email déja utilisé';
            break;
        case 'auth/invalid-email':
            errorMessage = 'Email invalide';
            break;
        case 'auth/operation-not-allowed':
            errorMessage = 'Opération non permise';
            break;
        case 'auth/weak-password':
            errorMessage = 'Le mot de passe doit avoir au minimum 6 caractères';
            break;
        default:
    }
    dispatch({
        type: CREATE_USER_FAIL,
        payload: errorMessage,
    });
};

/**
 * Redirect user to main
 * @param dispatch
 */
const createUserSuccess = (dispatch) => {
    dispatch({
        type: CREATE_USER_SUCCESS,
    });
    Actions.main({ type: 'reset' });
};

/**
 * Create new user in Firebase
 * @param email
 * @param password
 * @returns {function(*=)}
 */
export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });
        const userEmail = email.trim();
        firebase.auth().createUserWithEmailAndPassword(userEmail, password)
            .then(() => {
                const { currentUser } = firebase.auth();
                firebase.database().ref(`/users/${currentUser.uid}/email`)
                    .update({ userEmail })
                    .then(() => createUserSuccess(dispatch));
            })
            .catch(error => createUserFail(dispatch, error));
    };
};
