import React, {Component} from 'react';
import {
    View,
    ListView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {styles} from '../styleSheet';

import config from '../data/config';

import CompanyDetail from './companyDetail';


export default class SearchResult extends Component {
    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([{
                name: '三一集团有限公司',
                legal: '唐修国',
                date: '2011-09-09',
                status: '存续',
                capital: '100万人民币'
            }]),
            loaded: false,
            data: []
        };

        this.ds = ds;
    }

    componentWillMount () {

        console.log('company: componentWillMount');

        let data = this.props.data;

        this.setState({
            ...data
        });

        const companyKey = this.props.companyKey;

        this.searchCompany({
            name: companyKey
        });

    }

    componentDidMount () {
        console.log('company: componentDidMount');
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('company: shouldComponentUpdate', nextProps.companyKey, nextState.data.length);
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('company: componentWillUpdate', nextProps.companyKey, nextState.data.length);
    }

    componentDidUpdate (prevProps, prevSate) {
        console.log('compant: componentDidUpdate', prevProps.companyKey, prevSate.data.length);

    }


    searchCompany (filterObject = {}) {
        const url = config.companySearchUrl;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                filterObject
            )
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('company: search');
                this.setState({
                    dataSource: this.ds.cloneWithRows(res),
                    loaded: true,
                    data: res
                })
            })

    }

    render () {

        console.log('company: render');

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
                            defaultValue={this.props.companyKey}
                            returnKeyType="search"
                            onSubmitEditing={(event) => {
                                this.searchCompany({
                                    name: event.nativeEvent.text
                                })
                            }}
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
                    <Text style={{color: '#999', lineHeight: 38}}>搜索<Text style={{color: '#F86060'}}>253</Text>个公司</Text>
                </View>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.state.dataSource}
                    automaticallyAdjustContentInsets={false}
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
                            <Text style={{fontSize: 17, marginBottom: 8}}>{rowData.name}</Text>
                            <View style={sty.resultInfo}>
                                <View>
                                    <Text style={{color: '#666', marginBottom: 6}}>{rowData.legal}</Text>
                                    <Text style={{color: '#666'}}>{rowData.capital}</Text>
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