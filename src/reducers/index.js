import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import AuthReducer from './AuthReducer';

const config = {
    key: 'root',
    storage,
};

const appReducer = persistCombineReducers(config, {
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
