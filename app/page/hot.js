import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import {styles} from '../styleSheet';

export default class HotPage extends Component {
    render () {
        return (
            <ScrollView style={[styles.container, {backgroundColor: '#fff'}]}>
                <Text style={{fontSize: 16,lineHeight: 24, padding: 15}}>【百度宣布借贷20亿美元 已同21家银行签协议】百度在提交给监管部门的一份文件中称，2016年6月8日，百度同21家银行签署了总额20亿美元的贷款协议，其中包括10亿美元的5年期“子弹贷款”，以及10亿美元的5年期“循环贷款”，贷款利率较伦敦银行间同业拆借利率(LIBOR)高110个基点。百度表示，此次贷款的资金将用于企业一般性用途。（Techweb）</Text>
            </ScrollView>
        )
    }
}