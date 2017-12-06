import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    emailChanged,
    passwordChanged,
    loginUser,
    setUpForgotPasswordPage
} from '../../actions';
import SubmitButton from './SubmitButton';

export class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    };

    onPasswordForgotPress() {
        this.props.setUpForgotPasswordPage();
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <View style={styles.spinner}>
                    <Spinner />
                </View>
            );
        }

        return (
            <SubmitButton
                onPressAction={this.onButtonPress}
                submitText="Se connecter"
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Input
                                style={styles.input}
                                placeholderTextColor="#9e9e9e"
                                placeholder="hello@klapps.fr"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Input
                                style={styles.input}
                                placeholderTextColor="#999"
                                secureTextEntry
                                placeholder="password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </InputGroup>
                    </ListItem>
                    <TouchableOpacity
                        style={styles.passwordForgetButton}
                        onPress={this.onPasswordForgotPress.bind(this)}
                    >
                        <Text style={styles.passwordForget}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                </List>

                <Text style={styles.errorTextStyle} >
                    {this.props.error}
                </Text>
                {this.renderButton()}
            </View>

        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    loginUser, emailChanged, passwordChanged, setUpForgotPasswordPage
})(LoginForm);