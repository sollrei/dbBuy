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

import {styles} from '../styleSheet';
import ProductDetail from './productDetail';
import config from '../data/config';

const {width} = Dimensions.get('window');

export default class ProductList extends Component {

    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.ds = ds;

        this.state = {
            dataSource: ds.cloneWithRows([]),
            showType: 'grid',
            itemType: 'gridItem',
            animating: true,
            loaded: false,
            data: [],
            productKey: '',
            skip: 0
        };

        this.skip = 0;
        this.productKey = '';
        this.loading = false;
        this.hasMore = true;
    }

    searchProduct (filterObject = {
        filter: {},
        skip: 0
    }) {

        console.log('do search product');

        const url = config.productSearchUrl;

        this.loading = true;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                filterObject
            )
        })
            .then((res) => res.json())
            .then((res) => {

                this.skip = filterObject.skip || 0;
                this.productKey = filterObject.filter.proname || '';
                this.loading = false;

                let data = res;

                if (filterObject.skip !== 0) { data = this.state.data.concat(res);}

                this.setState({
                    dataSource: this.ds.cloneWithRows(data),
                    animating: false,
                    loaded: true,
                    data: data
                });
            });
    }

    componentWillMount () {

        const productKey = this.props.productKey;

        this.searchProduct({
            filter: {
                proname: productKey
            },
            skip: 0
        });

    }

    renderRow = (rowData) => {

        let imgSty, picArr, pic;

        if (this.state.itemType === 'listItem') {
            imgSty = {height: 88, width: 88, backgroundColor: '#fff'};
        } else {
            imgSty = {height: ( width - 12 ) / 2, width: ( width - 12 ) / 2, backgroundColor: '#fff'};
        }

        try {
            picArr = JSON.parse(rowData.picurl);
            pic = 'https:' + picArr[0];
        } catch (error) {
            pic = 'https://img10.cn.gcimg.net/v1/pro/1/T1.jpg-350x350.jpg';
        }


        return (
            <TouchableOpacity
                style={sty[this.state.itemType]}
                onPress={this.renderNewScene}
            >
                <View style={{padding: 2}}>
                    <Image
                        style={imgSty}
                        source={{uri: pic}}
                    />
                </View>
                <View style={sty.proInfo}>
                    <Text style={sty.proTitle}>{rowData.proname}</Text>
                    <View style={sty.proAdd}>
                        <Text style={[styles.primaryColor, styles.ft16]}>价格面议</Text>
                        <Text style={[styles.grayColor, sty.proCity]}>地区</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    renderNewScene = () => {
        this.props.navigator.push({
            title: '产品详情',
            component: ProductDetail,
            navigationBarHidden: false
        })
    };

    loadMore = () => {

        if (!this.loading && this.hasMore) {
            this.skip = this.skip + 1;
            this.searchProduct({
                filter: {
                    proname: this.productKey
                },
                skip: this.skip * 10
            })
        }

    };

    render () {

        let dom;

        if (this.state.loaded) {
            if (this.state.data.length ) {
                dom = <ListView
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={sty[this.state.showType]}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                />
            } else {
               dom = <View style={{alignItems: 'center', justifyContent: 'center', height: 100}}>
                   <Text>没有数据咯~</Text>
               </View>
            }
        } else {
            dom = <ActivityIndicator
                animating={this.state.animating}
                style={[{alignSelf: 'center', flex: 1}, {transform: [{scale: 1.5}]}]}
                size="large"
            />
        }

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
                            defaultValue={this.props.productKey}
                            returnKeyType="search"
                            onSubmitEditing={(event) => {
                                this.searchProduct({
                                    filter: {
                                        proname: event.nativeEvent.text
                                    },
                                    skip: 0
                                });
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={sty.changeType}
                        onPress={() => {
                            if (this.state.showType === 'grid') {
                                this.setState({
                                    showType: 'list',
                                    dataSource: this.ds.cloneWithRows(this.state.data),
                                    itemType: 'listItem'
                                })
                            } else {
                                this.setState({
                                    showType: 'grid',
                                    dataSource: this.ds.cloneWithRows(this.state.data),
                                    itemType: 'gridItem'
                                })
                            }

                        }}
                    >
                        <Image
                            source={require('image!icon_grid')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={sty.filter}>
                    <TouchableOpacity style={sty.filterItem}>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#e0e0e0'}}>|</Text>
                    <TouchableOpacity style={sty.filterItem}>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#e0e0e0'}}>|</Text>
                    <TouchableOpacity style={sty.filterItem}>
                        <Text>筛选</Text>
                    </TouchableOpacity>
                </View>
                {dom}
            </View>
        )
    }
}

const sty = StyleSheet.create({
    filter: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    filterItem: {
        flex: 1,
        alignItems: 'center'
    },
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
        right: 41,
        top: 8,
        borderRadius: 5,
        paddingLeft: 15
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
    proInfo: {
        padding: 10,
        height: 88,
        flex: 1
    },
    proTitle: {
        fontSize: 16,
        lineHeight: 18,
        height: 36,
        marginBottom: 23
    },
    proAdd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    proCity: {
        position: 'absolute',
        right: 0
    },
    gridItem: {
        width: width / 2 - 4,
        height: width / 2 + 100,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#f3f3f3'
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 1
    },
    list: {

    },
    grid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 2
    }
});