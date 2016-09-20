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
import LoginPage from '../page/login';
import Search from './search';
import AreaSearch from './areaSearch';

export default class Company extends Component {


    render () {

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
                                    const {user} = this.props;
                                    if (!user.login) {
                                        AlertIOS.alert('请先登录', '',
                                        [{
                                           text: '返回'
                                        },{
                                            text: '去登录',
                                            onPress: () => {
                                                this.props.navigator.push({
                                                    title: '加入大白采购',
                                                    component: LoginPage,
                                                    navigationBarHidden: false,
                                                    passProps: {...this.props}
                                                });
                                            }
                                        }]);
                                    }
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
                            <TouchableOpacity
                                style={styles.iconItem}
                                onPress={() => {
                                    this.props.navigator.push({
                                        title: '区间查询',
                                        component: AreaSearch,
                                        navigationBarHidden: false
                                    });
                                }}
                            >
                                <Image
                                    style={styles.iconImage}
                                    source={require('image!icon_area')}
                                />
                                <Text>区间查询</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Hot navigator={this.props.navigator} />
                </ScrollView>
            </View>
        )
    }

}
