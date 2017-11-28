// @flow
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene key="initial" component={Main} hideNavBar />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
