import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';

import Cate from './cate';
import ProductSearch from './productSearch';

export default class Product extends Component {

    shouldComponentUpdate () {
        // 先用静态页测试= =

        return false;
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={{marginTop: -20}}>
                    <View style={styles.topWrap}>
                        <Image
                            style={styles.topImage}
                            source={require('image!bg_product')}
                        >
                            <Text style={[styles.topText, {color: '#333'}]}>找产品</Text>
                        </Image>
                    </View>
                    <View style={styles.searchWrap}>
                        <View style={styles.search}>
                            <TouchableOpacity
                                style={{borderRadius: 4}}
                                onPress={() => {
                                    this.props.navigator.push({
                                        title: '搜索产品',
                                        component: ProductSearch
                                    })
                                }}
                            >
                                <Text style={styles.input}>请输入产品名称</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconWrap}>
                            <TouchableOpacity style={styles.iconItem}>
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_camera')}
                                />
                                <Text>拍照查询</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconItem}>
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_code')}
                                />
                                <Text>扫码比价</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Cate navigator={this.props.navigator}/>
                </ScrollView>
            </View>
        )
    }

}
