import React, {Component} from 'react';

import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';

import {styles} from '../styleSheet';
import Button from '../common/button';

const {height, width: screenWidth} = Dimensions.get('window');

export default class Sign extends Component {

    render () {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <View style={sty.signTop}>
                        <View style={sty.signCircle}>
                            <Text style={sty.signCount}>4</Text>
                        </View>
                        <Text style={{fontSize: 17, color: '#fff'}}>连续签到</Text>
                    </View>
                    <View style={sty.signRow}>
                        <View style={sty.signLeft}>
                            <Text style={sty.signText}>
                                <Text>连续3/3天</Text>
                                <Text>积分+10</Text>
                            </Text>
                            <View style={sty.signBar}>
                                <View style={sty.signBarInner}></View>
                            </View>
                        </View>
                        <Button text="领取"/>
                    </View>
                    <View style={sty.signRow}>
                        <View style={sty.signLeft}>
                            <Text style={sty.signText}>
                                <Text>连续3/3天</Text>
                                <Text>积分+10</Text>
                            </Text>
                            <View style={sty.signBar}>
                                <View style={sty.signBarInner}></View>
                            </View>
                        </View>
                        <Button text="领取"/>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    signTop: {
        height: 125,
        backgroundColor: '#0078FF',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signRow: {
        height: 60,
        backgroundColor: '#fff',
        marginBottom: 1,
        flexDirection: 'row',
        paddingLeft: 12,
        alignItems: 'center'
    },
    signCircle:{
        height: 66,
        width: 66,
        backgroundColor: '#fff',
        borderRadius: 33,
        marginBottom: 12
    },
    signCount:{
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 65,
        color: '#0078FF'
    },
    signLeft: {
        width: screenWidth - 102,
        justifyContent: 'flex-start'
    },
    signText: {
        color: '#333',
        marginBottom: 12
    },
    signBar: {
        height: 6,
        borderRadius: 9,
        width: 210,
        backgroundColor: '#d8d8d8'
    },
    signBarInner: {
        height: 6,
        borderRadius: 9,
        width: 10,
        backgroundColor: '#0078FF'
    }
});