import React, {Component} from 'react';
import {
    View, ScrollView,
    Image, Text, TextInput,
    Dimensions, TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';


export default class Hot extends Component {


    render () {
        return (
            <View style={styles.hotWrap}>
                <View style={styles.hotTitle}>
                    <Text style={{fontSize: 19, lineHeight: 44}}>热点</Text>
                </View>
                <View style={styles.hotLi}>
                    <Text style={styles.hotText}>百度借贷20亿美元，已同21家银行签协议</Text>
                </View>
                <View style={styles.hotLi}>
                    <Text style={styles.hotText}>百度借贷20亿美元，已同21家银行签协议</Text>
                </View>
                <View style={styles.hotLi}>
                    <Text style={styles.hotText}>百度借贷20亿美元，已同21家银行签协议</Text>
                </View>
            </View>
        )
    }

}