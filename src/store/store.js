import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

export default store;
