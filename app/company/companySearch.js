import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';

import SearchResult from './companySearchResult';

export default class Search extends Component {

    constructor (props) {
        super(props);

        this.state = {
            key: ''
        }
    }

    searchCompany (text) {
        if (text) {
            this.props.navigator.push({
                title: '搜索结果',
                component: SearchResult,
                passProps: {
                    companyKey: text
                }
            });
        } else {
            console.log('no search key');
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={sty.header}>
                    <TouchableOpacity
                        style={sty.back}
                        onPress={() => {
                            this.props.navigator.pop();
                        }}
                    >
                        <Image
                            source={require('image!arrow_left')}
                        />
                    </TouchableOpacity>
                    <View style={sty.headerSearch}>
                        <TextInput
                            style={{flex: 1}}
                            returnKeyType="search"
                            onSubmitEditing={(event) => {
                                this.searchCompany(event.nativeEvent.text)
                            }}
                            onChangeText={(text) => {
                                this.setState({
                                    key: text
                                })
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={sty.searchBtn}
                        onPress={() => {
                            this.searchCompany(this.state.key)
                        }}
                    >
                        <Text style={[styles.primaryColor, styles.ft16]}>查询</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}



const sty = StyleSheet.create({
    header: {
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        marginTop: 22,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerSearch: {
        height: 28,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 44,
        right: 56,
        top: 8,
        borderRadius: 5,
        paddingLeft: 10
    },
    changeType: {
        height: 44,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0
    },
    back: {
        width: 40,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBtn: {
        position: 'absolute',
        right: 0,
        width: 56,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    }
});