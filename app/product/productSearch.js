import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Navigator
} from 'react-native';

import ProductList from './productList';
import {styles} from '../styleSheet';

export default class ProductSearch extends Component {

    constructor (props) {
        super(props);
        this.state = {
            key: '',
            historyData: []
        };

        this.searchProduct = this.searchProduct.bind(this);
        this.clearLocalHistory = this.clearLocalHistory.bind(this);

    }

    componentWillMount () {
        // this.getLocalData();
        console.log('productSearch: componentWillMount');

        this.getLocalHistory();

    }

    getLocalHistory () {
        storage.load({
            key: 'history'
        }).then(ret => {

            console.log('get local search history:', ret);

            if (ret) {
                this.setState({
                    historyData: ret
                });
            }

        }).catch(err => {
            console.log(err.name);
        });
    }

    clearLocalHistory () {
        storage.remove({
            key: 'history'
        });

        this.setState({
            historyData: []
        });
    }

    // getLocalData = async () => { };

    checkSame (text) {
        let arr = this.state.historyData,
            hasSame = false;

        if (arr.length) {
            for (let i = 0,l = arr.length; i < l; i += 1) {
                if (arr[i] === text) {
                    hasSame = true;
                    arr.splice(i, 1);
                    arr.unshift(text);
                    break;
                }
            }
        }

        return hasSame;
    }

    searchProduct (text) {

        console.log('search product');

        if (text) {

            if (!this.checkSame(text)) {
                this.state.historyData.unshift(text);
            }
            
            storage.save({
                key: 'history',
                rawData: this.state.historyData
            });

            this.props.navigator.push({
                title: '搜索结果',
                component: ProductList,
                sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                passProps: {
                    productKey: text
                }
            });

        } else {

        }
    }

    renderItem () {
        return this.state.historyData.map((item, index) =>
            <TouchableOpacity
                style={[sty.hisRow]}
                key={index}
                onPress={() => {
                    this.searchProduct(item)
                }}
            >
                <Text style={sty.hisText}>{item}</Text>
            </TouchableOpacity>)
    }

    render () {

        let dom = this.renderItem();

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.back}
                        onPress={() => {
                            this.props.navigator.pop();
                        }}
                    >
                        <Image
                            source={require('image!arrow_left')}
                        />
                    </TouchableOpacity>
                    <View style={styles.headerSearch}>
                        <TextInput
                            style={{flex: 1}}
                            returnKeyType="search"
                            onSubmitEditing={(event) => {
                                this.searchProduct(event.nativeEvent.text);
                            }}
                            ref="searchInput"
                            onChangeText={(text) => {
                                this.setState({
                                    key: text
                                })
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.searchBtn}
                        onPress={() => {
                            this.searchProduct(this.state.key);
                        }}
                    >
                        <Text style={[styles.primaryColor, styles.ft16]}>查询</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                >
                    {dom}
                    <TouchableOpacity
                        style={sty.hisClear}
                        onPress={this.clearLocalHistory}
                    >
                        <Text style={styles.primaryColor}>清空历史记录</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const sty = StyleSheet.create({
    hisRow: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        marginBottom: 1
    },
    hisText: {
        fontSize: 15
    },
    hisClear: {
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});