import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import {styles} from '../styleSheet';

import Hot from './hot';

import * as actions from '../store/action';

export default class Company extends Component {


    render () {

        console.log(this.props.user)

        return (
            <View style={styles.container}>
                <ScrollView style={{marginTop: -20}}>
                    <View style={styles.topWrap}>
                        <Image
                            style={styles.topImage}
                            source={require('image!bg_company')}
                        >
                            <Text style={styles.topText}>查企业</Text>
                        </Image>
                    </View>
                    <View style={styles.searchWrap}>
                        <View style={styles.search}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入企业名、法人、注册号"
                            />
                        </View>
                        <View style={styles.iconWrap}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.dispatch(actions.setLogin());
                                }}
                                style={styles.iconItem}
                            >
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_camera')}
                                />
                                <Text>拍照查询</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconItem}>
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_around')}
                                />
                                <Text>周边查询</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconItem}>
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_area')}
                                />
                                <Text>区间查询</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Hot />
                </ScrollView>
            </View>
        )
    }

}
