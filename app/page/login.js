import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    DeviceEventEmitter,
    StyleSheet,
    Image,
    AlertIOS,
    Dimensions
} from 'react-native';
import openShare from 'react-native-open-share';


import {styles} from '../styleSheet';

import config from '../data/config';
import * as actions from '../store/action';

const {width} = Dimensions.get('window');

export default class LoginPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            mobile: '',
            code: '',
            modalVisible: false
        }
    }

    _wechatLogin = () => {

        openShare.wechatLogin();

        if(!this.wechatLogin) {
            this.wechatLogin = DeviceEventEmitter.addListener(
                'managerCallback',
                (response) => {
                    AlertIOS.alert(
                        'response',
                        JSON.stringify(response)
                    );

                    this.wechatLogin.remove();
                    delete this.wechatLogin;
                }
            );
        }
    };


    render () {
        return (
            <Image
                source={require('image!bg')}
                style={{flex: 1, width: width}}
            >
                <View style={{ paddingTop: 66, flex: 1, backgroundColor: 'transparent'}}>
                    <TextInput
                        style={[styles.loginInput, {marginBottom: 1}]}
                        placeholder="请输入手机号"
                        onChange={(event) => {
                            this.setState({
                                mobile: event.nativeEvent.text
                            })
                        }}
                        keyboardType='number-pad'
                        maxLength={11}
                    />
                    <TextInput
                        style={styles.loginInput}
                        placeholder="请输入动态密码"
                        returnKeyType="done"
                        onChange={(event) => {
                            this.setState({
                                code: event.nativeEvent.text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => {

                            this.setState({
                                modalVisible: true
                            });

                            fetch(config.userUrl, {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    setTimeout(() => {
                                        console.log('login event', responseJson);

                                        this.props.dispatch(actions.setLogin(responseJson));

                                        this.setState({
                                            modalVisible: false
                                        });

                                        this.props.navigator.pop();

                                    }, 1000);
                                })
                        }}
                    >
                        <Text style={styles.submitText}>登录</Text>
                    </TouchableOpacity>

                    <View style={sty.loginWrap}>
                        <View style={{height: 20, justifyContent: 'center', alignItems: 'center',marginTop: 100}}><Text style={{color: '#fff'}}>第三方登录</Text></View>
                        <View style={sty.login}>
                            <View
                                style={sty.loginItem}
                            >
                                <TouchableOpacity
                                    style={sty.loginImg}
                                    onPress={this._wechatLogin}
                                >
                                    <Image
                                        source={require('image!wechat')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={sty.loginItem}>
                                <View style={sty.loginImg}>
                                    <Image
                                        source={require('image!qq')}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Modal
                        visible={this.state.modalVisible}
                        transparent={true}
                        style={{backgroundColor: 'transparent'}}
                    >
                        <View style={styles.modalLayer}>
                            <View style={styles.modalBox}>
                                <Text style={styles.modalText}>登录中</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Image>
        )
    }
}

const sty = StyleSheet.create({
    login: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loginWrap: {
        height: 170,
        position: 'absolute',
        bottom: 43,
        left: 0,
        width: width
    },
    loginItem: {
        flex: 1,
        alignItems: 'center'
    },
    loginImg: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});