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
        this.da = [];

        this.state = {
            dataSource: ds.cloneWithRows(this.da),
            showType: 'grid',
            itemType: 'gridItem',
            animating: true
        }


    }

    componentWillMount () {

        const productKey = this.props.productKey;

        const url = config.productSearchUrl;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: productKey
            })
        })
            .then((res) => res.json())
            .then((res) => {
                this.da = res;


                this.setState({
                    dataSource: this.ds.cloneWithRows(res),
                    animating: false
                });



            });


    }

    renderRow = (rowData) => {

        let imgSty;
        if (this.state.itemType === 'listItem') {
            imgSty = {height: 88, width: 88};
        } else {
            imgSty = {height: ( width - 12 ) / 2, width: ( width - 12 ) / 2};
        }

        return (
            <TouchableOpacity
                style={sty[this.state.itemType]}
                onPress={this.renderNewScene}
            >
                <View style={{padding: 2}}>
                    <Image
                        style={imgSty}
                        source={{uri: rowData.picture}}
                    />
                </View>
                <View style={sty.proInfo}>
                    <Text style={sty.proTitle}>{rowData.name}</Text>
                    <View style={sty.proAdd}>
                        <Text style={[styles.primaryColor, styles.ft16]}>{rowData.price}</Text>
                        <Text style={[styles.grayColor, sty.proCity]}>{rowData.city}</Text>
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
        // fetch(config.productListUrl)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         this.da = this.da.concat(res.data);
        //         this.setState({
        //             dataSource: this.ds.cloneWithRows(this.da)
        //         })
        //     })
    };

    render () {

        let dom;

        if (this.da.length ) {
            dom = <ListView
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={sty[this.state.showType]}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                onEndReached={this.loadMore}
            />
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
                            defaultValue='插排'
                        />
                    </View>
                    <TouchableOpacity
                        style={sty.changeType}
                        onPress={() => {
                            if (this.state.showType === 'grid') {
                                this.setState({
                                    showType: 'list',
                                    dataSource: this.ds.cloneWithRows(this.da),
                                    itemType: 'listItem'
                                })
                            } else {
                                this.setState({
                                    showType: 'grid',
                                    dataSource: this.ds.cloneWithRows(this.da),
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
        paddingLeft: 65
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