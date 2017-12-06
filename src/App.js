/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store/store';
import Router from './Router';
import config from './firebase';

class App extends Component {
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        return (
            <Provider
                store={store}
            >
                <Router />
            </Provider>
        );
    }
}

export default App;
