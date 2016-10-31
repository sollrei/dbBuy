import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    StyleSheet,
    Animated
} from 'react-native';
import {styles} from '../styleSheet';

let {
    height, width
} = Dimensions.get('window');

export default class FavProduct extends Component {

    render () {
        return (
            <View style={[styles.container]}>
                <ScrollView
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {contentOffset: {x: scrollX}}
                        }])}
                >
                    <Text>hhhhhh</Text>
                </ScrollView>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    box: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width
    }
});