import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';

import Cate from './cate';

export default class Product extends Component {

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
                            <TextInput
                                style={styles.input}
                                placeholder="输入产品名"
                            />
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
                    <Cate />
                </ScrollView>
            </View>
        )
    }

}
