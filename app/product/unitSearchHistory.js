import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

import {styles} from '../styleSheet';

const hisData = [{
    label: '破碎机'
}, {
    label: 'led'
}, {
    label: '照明'
}];

export default class SearchHistory extends Component {

    renderItem () {
        return hisData.map((item, index) =>
            <TouchableOpacity
                style={[sty.hisRow]}
                key={index}
                onPress={() => {
                    this.props.search(item.label)
                }}
            >
            <Text style={sty.hisText}>{item.label}</Text>
        </TouchableOpacity>)
    }

    render () {

        let dom = this.renderItem();

        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
            >
                {dom}
                <TouchableOpacity style={sty.hisClear}>
                    <Text style={styles.primaryColor}>清空历史记录</Text>
                </TouchableOpacity>
            </ScrollView>
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