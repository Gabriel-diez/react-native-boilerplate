/**
 * @flow
 */
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class AuthChecker extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Actions.main({ type: 'reset' });
            } else {
                Actions.landing({ type: 'reset' });
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator
                    size="large"
                />
            </View>
        );
    }
}

export default AuthChecker;
