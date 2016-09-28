import React, {Component} from 'react';
import {
    View,
    ListView,
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

import ProductList from './productList';

import {styles} from '../styleSheet';

export default class ProductSearch extends Component {

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
                            
                        />
                    </View>
                    <TouchableOpacity
                        style={sty.searchBtn}
                        onPress={() => {
                            this.props.navigator.push({
                                title: '搜索结果',
                                component: ProductList
                            })
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