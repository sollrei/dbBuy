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

export default class My extends Component {
    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <ScrollView style={{marginTop: -22}}>
                    <View style={styles.topWrap}>
                        <Image
                            style={styles.topImage}
                            source={require('image!bg_my')}
                        >
                            <Text>hi</Text>
                        </Image>
                    </View>
                    <View style={styles.myNav}>
                        <View style={[styles.myNavItem, styles.mr1]}>
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text>企业收藏</Text>
                        </View>
                        <View style={[styles.myNavItem, styles.mr1]}>
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text>产品收藏</Text>
                        </View>
                        <View style={[styles.myNavItem, styles.mr1]}>
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text>广场收藏</Text>
                        </View>
                        <View style={styles.myNavItem}>
                            <Image
                                style={styles.mCount}
                                source={require('image!icon_ft')}
                            />
                            <Text>足迹</Text>
                        </View>
                    </View>
                    <View>
                        <View></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}