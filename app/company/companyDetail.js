import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {styles} from '../styleSheet';

const {height, width} = Dimensions.get('window');

export default class CompanyDetail extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={sty.infoWrap}>
                        <Text style={sty.title}>三一集团有限公司</Text>
                        <Image
                            source={require('image!line')}
                            style={{
                                height: 2,
                                flex: 1,
                                width: width - 24,
                                marginBottom: 16
                            }}
                        />
                        <Text style={{marginBottom: 15}}>
                            <Text style={{fontSize: 18, marginRight: 6}}>唐修国</Text>
                            <Text style={{color: '#999'}}>企业法人</Text>
                        </Text>
                        <View>
                            <Text style={[sty.infoText, {marginBottom: 10}]}>0731-84031888</Text>
                        </View>
                        <View>
                            <Text style={sty.infoText}>长沙市经济技术开发区...行政中心三楼</Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 16}}>
                        <View style={sty.contactRow}>
                            <Text style={sty.contactText}>联系方式</Text>
                        </View>
                        <View style={sty.contactRow}>
                            <Text style={sty.contactText}>企业概况</Text>
                        </View>
                        <View style={sty.contactRow}>
                            <Text style={sty.contactText}>商铺</Text>
                        </View>
                    </View>
                    <View style={sty.unitWrap}>
                        <TouchableOpacity style={sty.unit}>
                            <Image
                                style={sty.mb12}
                                source={require('image!info_file')}
                            />
                            <Text>工商档案</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={sty.unit}>
                            <Image
                                source={require('image!info_relate')}
                                style={sty.mb12}
                            />
                            <Text>关联企业</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={sty.unit}>
                            <Image
                                style={sty.mb12}
                                source={require('image!info_judge')}
                            />
                            <Text>法院判决</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const sty = StyleSheet.create({
    infoWrap: {
        backgroundColor: '#fff',
        marginBottom: 16,
        paddingVertical: 20,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 19,
        marginBottom: 16
    },
    infoText: {
        color: '#526792',
        fontSize: 16
    },
    contactRow: {
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 12
    },
    contactText: {
        fontSize: 17
    },
    unitWrap: {
        flexDirection: 'row',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unit: {
        flex: 1,
        height: 90,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 1
    },
    mb12: {
        marginBottom: 12
    }
});