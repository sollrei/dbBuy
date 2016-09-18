import React, {Component} from 'react';
import {
    View, ScrollView,
    Image, Text, TextInput, ListView, NavigatorIOS,
    Dimensions, TouchableOpacity, SegmentedControlIOS
} from 'react-native';

import {styles} from '../styleSheet';

export default class ChatPage extends Component {


    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                    <Text>i am detail page</Text>

                </ScrollView>
                <View>

                </View>
            </View>
        )
    }

}