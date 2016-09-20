import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {styles} from '../styleSheet';

import LoginPage from '../page/login';
import Sign from './sign';
import Score from './score';
import Footprint from './footprint';
import FavCompany from './favCompany';
import FavProduct from './favProduct';
import FavPlace from './favPlace';

export default class My extends Component {

    dealLoginScene (title, scene) {
        const {user} = this.props;

        if (!user.login) {
            this.props.navigator.push({
                title: '加入大白采购',
                component: LoginPage,
                navigationBarHidden: false,
                passProps: {...this.props}
            });
        } else {
            this.props.navigator.push({
                title: title,
                component: scene,
                navigationBarHidden: false,
                passProps: {...this.props},
                leftButtonIcon: require('image!arrow_left'),
                tintColor: '#333',
                onLeftButtonPress: () => this.props.navigator.pop()
            });
        }
    }

    render () {
        let {user} = this.props;
        let imageDom;

        if (user.user.avatar) {
            imageDom = <Image style={{height: 55, width: 55}} source={{uri: user.user.avatar}} />;
        } else {
            imageDom = <Image style={{height: 55, width: 55}} source={require('image!avatar')} />;
        }

        return (
            <View style={styles.container}>
                <ScrollView style={{marginTop: -22}}>
                    <View style={styles.topWrap}>
                        <Image
                            style={[styles.topImage, styles.myAvatar]}
                            source={require('image!bg_my')}
                        >
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <TouchableOpacity
                                    onPress={this.dealLoginScene.bind(this, '积分', Score)}
                                    style={[styles.mAvatar, {height: 45, width: 45}]}
                                >
                                    <Text style={styles.mAvatarText}>0</Text>
                                    <Text style={styles.mAvatarText}>积分</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <TouchableOpacity
                                    onPress={this.dealLoginScene.bind(this, '积分', Score)}
                                    style={styles.mAvatar}
                                >
                                    {imageDom}
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <TouchableOpacity
                                    onPress={this.dealLoginScene.bind(this, '签到', Sign)}
                                    style={[styles.mAvatar, {height: 45, width: 45}]}
                                >
                                    <Text style={styles.mAvatarText}>0</Text>
                                    <Text style={styles.mAvatarText}>签到</Text>
                                </TouchableOpacity>
                            </View>
                        </Image>
                    </View>
                    <View style={styles.myNav}>
                        <TouchableOpacity
                            style={[styles.myNavItem, styles.mr1]}
                            onPress={this.dealLoginScene.bind(this, '企业收藏', FavCompany)}
                        >
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text style={styles.mCTitle}>企业收藏</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.myNavItem, styles.mr1]}
                            onPress={this.dealLoginScene.bind(this, '产品收藏', FavProduct)}
                        >
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text style={styles.mCTitle}>产品收藏</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.myNavItem, styles.mr1]}
                            onPress={this.dealLoginScene.bind(this, '广场收藏', FavPlace)}
                        >
                            <Text style={[styles.mCount, styles.mCText]}>0</Text>
                            <Text style={styles.mCTitle}>广场收藏</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.myNavItem}
                            onPress={this.dealLoginScene.bind(this, '足迹', Footprint)}
                        >
                            <Image
                                style={styles.mCount}
                                source={require('image!icon_ft')}
                            />
                            <Text style={styles.mCTitle}>足迹</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.mRow, styles.mb1]}>
                        <Image
                            style={styles.mRowImage}
                            source={require('image!icon_friend')}
                        />
                        <Text style={styles.mRowText}>我的好友</Text>
                        <Image
                            source={require('image!arrow_right')}
                            style={styles.arrow}
                        />
                    </View>
                    <View style={[styles.mRow, {marginBottom: 16}]}>
                        <Image
                            style={styles.mRowImage}
                            source={require('image!icon_recommend')}
                        />
                        <Text style={styles.mRowText}>推荐大白给好友</Text>
                    </View>
                    <View style={[styles.mRow, styles.mb1]}>
                        <Image
                            style={styles.mRowImage}
                            source={require('image!icon_help')}
                        />
                        <Text style={styles.mRowText}>问题反馈</Text>
                        <Image
                            source={require('image!arrow_right')}
                            style={styles.arrow}
                        />
                    </View>
                    <View style={[styles.mRow, {marginBottom: 16}]}>
                        <Image
                            style={styles.mRowImage}
                            source={require('image!icon_star')}
                        />
                        <Text style={styles.mRowText}>五星好评</Text>
                        <Image
                            source={require('image!arrow_right')}
                            style={styles.arrow}
                        />
                    </View>
                    <View style={styles.mRow}>
                        <Image
                            style={styles.mRowImage}
                            source={require('image!icon_set')}
                        />
                        <Text style={styles.mRowText}>设置</Text>
                        <Image
                            source={require('image!arrow_right')}
                            style={styles.arrow}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}