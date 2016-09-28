import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';
import HotPage from '../page/hot';

const hotData = [{
    "title": "百度借贷20亿美元，已同21家银行签协议",
    "id": "1"
},{
    "title": "三星Note7国行版也炸了：网友爆料突然黑屏发生爆炸",
    "id": "2"
},{
    "title": "凯文凯利：如何一分钟预测未来",
    "id": "3"
}];

export default class Hot extends Component {

    constructor (props) {
        super(props);
    }

    renderItem (data, index) {
        return (
            <TouchableOpacity
                key={index}
                style={styles.hotLi}
                onPress={() => {
                    this.props.navigator.push({
                        title: data.title,
                        component: HotPage,
                        navigationBarHidden: false,
                        passProps: {
                            key: data.id
                        }
                    });
                }}
            >
                <Text style={styles.hotText}>{data.title}</Text>
            </TouchableOpacity>
        )
    }

    render () {

        let rowDom = hotData.map((item, index) => {
            return this.renderItem(item, index)
        });

        return (
            <View style={styles.hotWrap}>
                <View style={styles.hotTitle}>
                    <Text style={{fontSize: 19, lineHeight: 44}}>热点</Text>
                </View>
                {rowDom}
            </View>
        )
    }

}