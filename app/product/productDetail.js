import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

import Swiper from 'react-native-swiper';

import config from '../data/config';

import {styles} from '../styleSheet';

const {width: screenWidth} = Dimensions.get('window');

export default class ProductDetail extends Component {

    constructor (props) {
        super(props);

        this.state = {
            productData: ''
        }
    }

    componentWillMount () {
        this.searchProductInfo();
    }

    searchProductInfo () {
        const url = config.productDetailUrl;
        const cid = this.props.cid;
        const pid = this.props.pid;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                pid: pid,
                cid: cid
            })
        }).then(res => res.json())
            .then(res => {

                this.setState({
                    productData: res[0]
                })
            });
    }

    renderImage () {
        try {
            let pic = JSON.parse(this.state.productData.picurl);

            return pic.map((item, index) => {

                let img = {uri: 'https:' + item};

                return <View style={sty.proImage} key={index} >
                    <Image
                        style={{height: 200, width: screenWidth}}
                        source={img}
                        resizeMode='contain'
                    />
                </View>

            });

        } catch (err) {

            return <View style={sty.proImage}>
                <Image
                    style={{height: 200, width: screenWidth}}
                    source={{uri: 'https://img10.cn.gcimg.net/v1/pro/1/T1.jpg-350x350.jpg'}}
                    resizeMode='contain'
                    key={index}
                />
            </View>;
        }
    }


    render () {

        if (!this.state.productData) {
            return <View><Text>loading...</Text></View>
        }

        const imgDom = this.renderImage();

        return (
            <View style={styles.container}>
                <ScrollView style={{paddingTop: 65}}>
                    <Swiper height={200}>
                        {imgDom}
                    </Swiper>
                    <View style={sty.proTitle}>
                        <Text style={[styles.ft17, sty.proTitleText]}>
                            {this.state.productData.proname}
                            </Text>
                        <View style={sty.proPrice}>
                            <Text style={[styles.primaryColor, sty.proPriceText]}>价格面议</Text>
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
