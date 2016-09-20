import React, {Component} from 'react';

import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';

import {styles} from '../styleSheet';

export default class Button extends Component {
    render () {
        return (
            <TouchableOpacity
                style={[sty.button, this.props.style]}
            >
                <Text
                    style={sty.text}
                >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const sty = StyleSheet.create({
    button: {
        width: 66,
        height: 36,
        backgroundColor: '#0078FF',
        borderRadius: 4,
        overflow: 'hidden'
    },
    text: {
        lineHeight: 35,
        textAlign: 'center',
        color: '#fff'
    }
});