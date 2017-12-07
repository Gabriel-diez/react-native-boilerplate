import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import {
    loginUser,
} from '../actions/index';
import SubmitButton from './SubmitButton';

const styles = {
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 10,
    },
};

export class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    onEmailChange = (email) => {
        this.setState({
            email,
        });
    };

    onPasswordChange = (password) => {
        this.setState({
            password,
        });
    };

    onButtonPress = () => {
        const {
            email,
            password,
        } = this.state;

        this.props.loginUser({
            email,
            password,
        });
    };

    renderButton() {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <SubmitButton
                onPress={this.onButtonPress}
                submitText="Se connecter"
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', margin: 10 }}>
                <Text style={{ alignSelf: 'center' }}>
                    Connexion
                </Text>
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onEmailChange}
                        placeholder="Email"
                        value={this.state.email}
                    />

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
                    />
                </View>

                <Text>
                    {this.props.error}
                </Text>
                {this.renderButton()}
            </View>

        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { error, loading } = auth;
    return { error, loading };
};

export default connect(mapStateToProps, {
    loginUser,
})(Login);
