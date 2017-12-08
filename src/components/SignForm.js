// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import {
    loginUser,
    createUser,
} from '../actions/index';
import SubmitButton from './SubmitButton';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 10,
    },
};

type Props = {
    formType: 'login' | 'register'
};

type State = {
    email: string,
    password: string,
};

export class SignForm extends Component<Props, State> {
    /**
     * initial state
     * @type {{email: string, password: string}}
     */
    state = {
        email: '',
        password: '',
    };

    onEmailChange = (email: string) => {
        this.setState({
            email,
        });
    };

    onPasswordChange = (password: string) => {
        this.setState({
            password,
        });
    };

    onButtonPress = () => {
        const {
            email,
            password,
        } = this.state;

        if (this.props.formType === 'login') {
            this.props.loginUser({
                email,
                password,
            });
        } else {
            this.props.createUser({
                email,
                password,
            });
        }
    };

    renderButton = () => {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            );
        }

        return (
            <SubmitButton
                onPress={this.onButtonPress}
                submitText={this.props.formType === 'login' ? 'Se connecter' : 'S\'inscrire'}
            />
        );
    };

    renderTitle = () => {
        if (this.props.formType === 'login') {
            return 'Connexion';
        }
        return 'S\'enregistrer';
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ alignSelf: 'center' }}>
                    {this.renderTitle()}
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
    createUser,
})(SignForm);
