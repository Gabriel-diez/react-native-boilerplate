import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Main = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Main App
            </Text>

            <TouchableOpacity>
                <Text>Connextion</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Inscription</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;
