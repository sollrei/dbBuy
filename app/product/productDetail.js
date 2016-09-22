import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

import {styles} from '../styleSheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class ProductDetail extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Swiper height={200}>
                        <View style={sty.proImage}>
                            <Image
                                style={{height: 200, width: screenWidth}}
                                source={{uri: 'https://img10.cn.gcimg.net/gcwthird/day_20160809/256c4067e3i2edebcada9l88a9b37f57.jpg-350x350.jpg'}}
                                resizeMode='contain'

                            />
                        </View>
                        <View style={sty.proImage}>
                            <Image
                                style={{height: 200, width: screenWidth}}
                                source={{uri: 'https://img10.cn.gcimg.net/gcwthird/day_20160809/8bba6bde4dd08c80443f2xc82983de94.jpg-normalone'}}
                                resizeMode='contain'

                            />
                        </View>
                    </Swiper>
                    <View style={sty.proTitle}>
                        <Text style={[styles.ft17, sty.proTitleText]}>小米智能插线板插座排插 带USB充电独立开关拖线板插板接线板插排</Text>
                        <View style={sty.proPrice}>
                            <Text style={[styles.primaryColor, sty.proPriceText]}>¥ 49.00 </Text>
                            <Text style={[sty.proPriceCity, styles.darkColor]}>广东深圳</Text>
                        </View>
                    </View>
                    <View style={sty.proAttr}>
                        <Text style={styles.ft17}>产品属性</Text>
                    </View>
                    <View style={sty.proAttrWrap}>
                        <View style={[styles.line, sty.proAttrRow]}>
                            <Text style={[styles.darkColor, {width: 96}]}>产品型号</Text>
                            <Text>XMCXB01QM</Text>
                        </View>
                        <View style={[styles.line, sty.proAttrRow]}>
                            <Text style={[styles.darkColor, {width: 96}]}>产品型号</Text>
                            <Text>XMCXB01QM</Text>
                        </View>
                        <View style={[styles.line, sty.proAttrRow]}>
                            <Text style={[styles.darkColor, {width: 96}]}>产品型号</Text>
                            <Text>XMCXB01QM</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={sty.bottom}>
                    <TouchableOpacity style={sty.bottomItem}>
                        <Image
                            source={require('image!share')}
                            style={{height: 20, width: 20}}
                        />
                        <Text style={sty.bottomText}>分享</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty.bottomItem}>
                        <Image
                            source={require('image!fav')}
                            style={{height: 20, width: 20}}
                        />
                        <Text style={sty.bottomText}>收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty.bottomItem}>
                        <Image
                            source={require('image!shop')}
                            style={{height: 20, width: 20}}
                        />
                        <Text style={sty.bottomText}>店铺</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[sty.bottomItem, {flex: 2, marginRight: 0}, sty.bottomButton]}>
                        <Text style={{fontSize: 16, color: '#fff'}}>联系供应商</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const sty = StyleSheet.create({
    proImage: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    proTitle: {
        padding: 12,
        backgroundColor: '#fff'
    },
    proTitleText: {
        lineHeight: 18,
        height: 36
    },
    proPrice: {
        flexDirection: 'row',
        paddingTop: 12
    },
    proPriceText: {
        fontSize: 20
    },
    proPriceCity: {
        position: 'absolute',
        right: 0,
        top: 17
    },
    proAttr: {
        height: 46,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    proAttrWrap: {
        backgroundColor: '#fff',
        paddingHorizontal: 12
    },
    proAttrRow: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    bottom: {
        height: 45,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomItem: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#f3f3f3'
    },
    bottomText: {
        fontSize: 10,
        color: '#666',
        marginTop: 2
    },
    bottomButton: {
        backgroundColor: '#0078FF'
    }
});
