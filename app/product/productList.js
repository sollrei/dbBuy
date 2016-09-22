import React, {Component} from 'react';
import {
    View,
    ListView,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {styles} from '../styleSheet';
import ProductDetail from './productDetail';

export default class ProductList extends Component {

    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.renderRow = this.renderRow.bind(this);

        this.state = {
            dataSource: ds.cloneWithRows([{
                title: '带USB插座插排插线板接线板拖插板双控过载独立开带USB插座插排插线板接线板拖插板双控过载独立开带USB插座插排插线板接线板拖插板双控过载独立开...',
                city: '黑龙江',
                price: '¥25.90',
                image: 'https://img10.cn.gcimg.net/gcwthird/day_20160916/d082972ec9k2577068a4aa3275cf1a1d.jpg-350x350.jpg'
            },{
                title: '带USB插座插排插线板接线板拖插板双控过载独立开带USB插座插排插线板接线板拖插板双控过载独立开带USB插座插排插线板接线板拖插板双控过载独立开...',
                city: '黑龙江',
                price: '¥25.90',
                image: 'https://img10.cn.gcimg.net/gcwthird/day_20160916/d082972ec9k2577068a4aa3275cf1a1d.jpg-350x350.jpg'
            }])
        }
    }

    renderRow (rowData) {
        return (
            <TouchableOpacity
                style={sty.listItem}
                onPress={() => {
                    this.props.navigator.push({
                        title: '产品详情',
                        component: ProductDetail,
                        navigationBarHidden: false
                    })
                }}
            >
                <View style={{padding: 2}}>
                    <Image
                        style={{height: 88, width: 88}}
                        source={{uri: rowData.image}}
                    />
                </View>
                <View style={sty.proInfo}>
                    <Text style={sty.proTitle}>{rowData.title}</Text>
                    <View style={sty.proAdd}>
                        <Text style={[styles.primaryColor, styles.ft16]}>{rowData.price}</Text>
                        <Text style={[styles.grayColor, sty.proCity]}>{rowData.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
                </View>
                <View style={sty.filter}>
                    <Text>筛选</Text>
                </View>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
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
        flexDirection: 'row'
    },
    header: {
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        marginTop: 22,
        alignItems: 'center',
        flexDirection: 'row'
    },
    back: {
        width: 40,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 1
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
    }
});