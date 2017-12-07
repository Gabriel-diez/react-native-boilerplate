// @flow
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import Landing from './components/Landing';
import Login from './components/Login';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene key="landing" component={Landing} hideNavBar />
                <Scene key="main" component={Main} hideNavBar />
                <Scene initial key="login" component={Login} hideNavBar />
                <Scene key="register" component={Main} hideNavBar />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
