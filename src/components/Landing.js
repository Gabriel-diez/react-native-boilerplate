import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Landing = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Landing Page
            </Text>

            <TouchableOpacity
                onPress={() => Actions.login()}
            >
                <Text>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Inscription</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Landing;
