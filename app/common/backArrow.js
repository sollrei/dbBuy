import React, {Component} from 'react';
import {
    View,
    ListView,
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

import {styles} from '../styleSheet';

export default class BackArrow extends Component {
    render () {
        return (
            <TouchableOpacity
                style={styles.back}
                onPress={() => {
                    this.props.navigator.pop();
                }}
            >
                <Image source={require('image!arrow_left')} />
            </TouchableOpacity>
        )
    }
}