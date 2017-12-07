// @flow
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene key="landing" component={Landing} hideNavBar />
                <Scene key="main" component={Main} hideNavBar />
                <Scene key="login" component={Login} hideNavBar />
                <Scene key="register" component={Register} hideNavBar />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
