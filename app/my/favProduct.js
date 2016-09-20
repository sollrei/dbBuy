import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {styles} from '../styleSheet';

export default class FavProduct extends Component {

    render () {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <Text>这乱七八糟的页面咋这么多啊。。。真是醉了啊</Text>
                </ScrollView>
            </View>
        )
    }

}