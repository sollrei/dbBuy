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

export default class Score extends Component {

    render () {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <View style={sty.signTop}>
                        <View style={sty.signCircle}>
                            <Text style={sty.signCount}>260</Text>
                        </View>
                        <Text style={{fontSize: 17, color: '#fff'}}>我的积分</Text>
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
    }
});