// @flow
import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

type Props = {
    onPress: Object,
    buttonStyle?: Object,
    submitText?: string,
    submitTextStyle?: Object,
}

/**
 * Return <SubmitButton>
 * @param props
 * @returns {XML}
 * @constructor
 */
const SubmitButton = (props: Props) => {
    return (
        <TouchableOpacity
            style={{
                ...{
                    alignSelf: 'center',
                    backgroundColor: '#000',
                },
                ...props.buttonStyle,
            }}
            onPress={props.onPress}
        >
            <Text style={props.submitTextStyle}>
                {props.submitText}
            </Text>
        </TouchableOpacity>
    );
};

/**
 * @type {{submitText: string, submitTextStyle: {color: string}, buttonStyle: {paddingLeft: number, paddingRight: number, paddingTop: number, paddingBottom: number, borderRadius: number}}}
 */
SubmitButton.defaultProps = {
    submitText: 'Enregistrer',
    submitTextStyle: {
        color: '#FFF',
    },
    buttonStyle: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    },
};

export default SubmitButton;
