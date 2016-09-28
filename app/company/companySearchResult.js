import React, {Component} from 'react';
import {
    View,
    ScrollView,
    ListView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {styles} from '../styleSheet';

import CompanyDetail from './companyDetail';

export default class SearchResult extends Component {
    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([{
                title: '三一集团有限公司',
                name: '唐修国',
                date: '2011-09-09',
                status: '存续',
                money: '100万人民币'
            }])
        };
    }

    componentWillMount () {

        let data = this.props.data;

        this.setState({
            ...data
        });
    }


    render () {

        return (
            <View style={[styles.container]}>
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
                    >
                        <Text style={[styles.primaryColor, styles.ft16]}>查询</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={sty.filterCount}
                >
                    <Text style={{color: '#999'}}>搜索<Text style={{color: '#F86060'}}>253</Text>个公司</Text>
                </View>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableOpacity
                            style={sty.resultItem}
                            onPress={() => {
                                this.props.navigator.push({
                                    title: '企业信息',
                                    component: CompanyDetail,
                                    navigationBarHidden: false
                                })
                            }}
                        >
                            <Text style={{fontSize: 17, marginBottom: 8}}>{rowData.title}</Text>
                            <View style={sty.resultInfo}>
                                <View>
                                    <Text style={{color: '#666', marginBottom: 6}}>{rowData.name}</Text>
                                    <Text style={{color: '#666'}}>{rowData.money}</Text>
                                </View>
                                <View style={sty.resultRight}>
                                    <Text style={[sty.resultRightText, {marginBottom: 6}]}>{rowData.status}</Text>
                                    <Text style={sty.resultRightText}>{rowData.date}</Text>
                                </View>
                                <Image
                                    source={require('image!arrow_right')}
                                    style={{position: 'absolute', right: 0}}
                                />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const sty = StyleSheet.create({
    filter: {
        height: 38,
        backgroundColor: '#fff'
    },
    filterWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 38
    },
    filterItem: {
        paddingLeft: 12,
        height: 38
    },
    filterText: {
        lineHeight: 37,
        flexDirection: 'row'
    },
    filterCount: {
        alignItems: 'flex-end',
        height: 38,
        justifyContent: 'center',
        paddingRight: 12
    },
    resultItem: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginBottom: 1
    },
    resultInfo: {
        flexDirection: 'row'
    },
    resultRight: {
        position: 'absolute',
        right: 24
    },
    resultRightText: {
        textAlign: 'right',
        color: '#666'
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