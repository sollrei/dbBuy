import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';

import {styles} from '../styleSheet';

import config from '../data/config';
import * as actions from '../store/action';

export default class LoginPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            mobile: '',
            code: '',
            modalVisible: false
        }
    }

    render () {
        return (
            <View style={[styles.container,{ paddingTop: 80}]}>
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
        )
    }
}

