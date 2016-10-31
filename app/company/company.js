import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import {styles} from '../styleSheet';


import LoginPage from '../page/login';
import Search from './companySearch';
import AreaSearch from './areaSearch';
import CameraSearch from './cameraSearch';
import MapSearch from './mapSearch';
import HotPage from '../page/hot';
import Hot from './unitHot';

export default class Company extends Component {

    constructor (props) {
        super(props);
        this.state = {
            img: ''
        };
    }

    componentWillMount () {
        // console.log('companyIndex: componentWillMount');
    }

    componentDidMount () {

    }

    componentDidMount () {
        // console.log('companyIndex: componentDidMount');
    }

    shouldComponentUpdate (nextProps, nextState) {
        // console.log('companyIndex: shouldComponentUpdate');
        return false;
    }

    componentWillUpdate (nextProps, nextState) {
        // console.log('companyIndex: componentWillUpdate');
    }

    componentDidUpdate (prevProps, prevSate) {
        // console.log('companyIndex: componentDidUpdate');

    }

    renderItem (data, index) {
        return (
            <TouchableOpacity
                key={index}
                style={styles.hotLi}
                onPress={() => {
                    this.props.navigator.push({
                        title: data.title,
                        component: HotPage,
                        navigationBarHidden: false,
                        passProps: {
                            key: data.id
                        }
                    });
                }}
            >
                <Text style={styles.hotText}>{data.title}</Text>
            </TouchableOpacity>
        )
    }

    render () {

        // console.log('companyIndex: render');

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
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigator.push({
                                        title: '企业搜索',
                                        component: Search
                                    })
                                }}
                            >
                                <Text style={styles.input}>请输入企业名、法人、注册号</Text>
                            </TouchableOpacity>

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
                                    } else {
                                        this.props.navigator.push({
                                            title: '拍照查询',
                                            component: CameraSearch,
                                            navigationBarHidden: false
                                        })
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
                            <TouchableOpacity
                                style={styles.iconItem}
                                onPress={() => {
                                    this.props.navigator.push({
                                        title: '周边查询',
                                        component: MapSearch
                                    })
                                }}
                            >
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

                    <Hot {...this.props} />
                </ScrollView>
            </View>
        )
    }


}

