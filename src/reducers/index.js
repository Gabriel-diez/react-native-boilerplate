import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
    auth: AuthReducer,
});

const rootReducer = (state, action) => {
    let newState = state;
    if (action.type === 'logout_user_success') {
        newState = undefined;
    }
    return appReducer(newState, action);
};

export default rootReducer;
