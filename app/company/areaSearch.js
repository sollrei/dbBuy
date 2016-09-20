import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {styles} from '../styleSheet';
import SearchPage from './searchPage';
import SearchResult from './searchResult';

export default class AreaSearch extends Component {

    constructor (props) {
        super(props);

        this.state = {
            industry: {
                id: 0,
                label: '不限',
                style: 'sDefault'
            },
            area: {
                id: 0,
                label: '不限',
                style: 'sDefault'
            },
            year: {
                id: 0,
                label: '不限',
                style: 'sDefault'
            },
            money: {
                id: 0,
                label: '不限',
                style: 'sDefault'
            },
            status: {
                id: 0,
                label: '不限',
                style: 'sDefault'
            }
        }
    }

    renderNewScene (title, page, type) {
        this.props.navigator.push({
            title: title,
            component: page,
            navigationBarHidden: false,
            leftButtonTitle: '',
            passProps: {
                fn: (id, label, style) => {
                    this.setState({
                        [type]: {
                            id: id,
                            label: label,
                            style: style
                        }
                    });
                },
                selectedId: this.state[type].id,
                type: type
            }
        })
    }

    render () {
        return (
            <View style={[styles.container]}>
                <ScrollView style={{paddingTop: 12}}>
                    <TouchableOpacity style={sty.sRow}>
                        <Text style={sty.sRowText}>行业</Text>
                        <View style={sty.sRowRight}>
                            <Text
                                style={sty[this.state.industry.style]}
                            >{this.state.industry.label}</Text>
                            <Image
                                source={require('image!arrow_right')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty.sRow}>
                        <Text style={sty.sRowText}>地区</Text>
                        <View style={sty.sRowRight}>
                            <Text
                                style={sty[this.state.area.style]}
                            >{this.state.area.label}</Text>
                            <Image
                                source={require('image!arrow_right')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sty.sRow}
                        onPress={this.renderNewScene.bind(this, '成立年限选择', SearchPage, 'year')}
                    >
                        <Text style={sty.sRowText}>成立年限</Text>
                        <View style={sty.sRowRight}>
                            <Text
                                style={sty[this.state.year.style]}
                            >{this.state.year.label}</Text>
                            <Image
                                source={require('image!arrow_right')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sty.sRow}
                        onPress={this.renderNewScene.bind(this, '注册资本选择', SearchPage, 'money')}
                    >
                        <Text style={sty.sRowText}>注册资本</Text>
                        <View style={sty.sRowRight}>
                            <Text
                                style={sty[this.state.money.style]}
                            >{this.state.money.label}</Text>
                            <Image
                                source={require('image!arrow_right')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sty.sRow}
                        onPress={this.renderNewScene.bind(this, '企业选择', SearchPage, 'status')}
                    >
                        <Text style={sty.sRowText}>企业状态</Text>
                        <View style={sty.sRowRight}>
                            <Text
                                style={sty[this.state.status.style]}
                            >{this.state.status.label}</Text>
                            <Image
                                source={require('image!arrow_right')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sty.sSubmit}
                        onPress={() => {
                            this.props.navigator.push({
                                title: '区间查询结果',
                                component: SearchResult,
                                navigationBarHidden: false,
                                passProps: {
                                    data: {...this.state}
                                }
                            })
                        }}
                    >
                        <Text style={{fontSize: 17, color: '#fff'}}>查找</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    sRow: {
        marginHorizontal: 12,
        backgroundColor: '#fff',
        height: 46,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#e0e0e0',
        marginBottom: 8,
        paddingLeft: 12,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sRowText: {
        fontSize: 16
    },
    sRowRight: {
        position: 'absolute',
        right: 12,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44
    },
    sSubmit: {
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 4,
        backgroundColor: '#0078FF',
        marginTop: 4
    },
    sDefault: {
        color: '#999',
        fontSize: 15
    },
    sSelect: {
        color: '#333',
        fontSize: 15
    }
});