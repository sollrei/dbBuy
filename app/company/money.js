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

const data = [{
    id: 0,
    label: '不限'
}, {
    id: 1,
    label: '一年内'
}, {
    id: 2,
    label: '两年内'
}, {
    id: 3,
    label: '三年内'
}, {
    id: 4,
    label: '四年内'
}, {
    id: 5,
    label: '五年内'
}, {
    id: 6,
    label: '八年内'
}, {
    id: 7,
    label: '十年内'
}, {
    id: 8,
    label: '十五年内'
}];

export default class Money extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        let selected = this.props.selectedId || 0,
            fn = this.props.fn,
            type = this.props.type;


        let listDom = data.map((item, index) => {

            const id = item.id,
                label = item.label;


            if (id === selected) {
                return (
                    <TouchableOpacity
                        style={sty.row}
                        key={id}
                        onPress={() => {
                            fn(id, label, 'sDefault');
                            this.props.navigator.pop();
                        }}
                    >
                        <Text style={{fontSize: 16, color: '#0078FF'}}>{label}</Text>
                        <Image
                            source={require('image!icon_select')}
                            style={sty.icon}
                        />
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity
                        style={sty.row}
                        key={id}
                        onPress={() => {
                            fn(id, label, 'sSelect');
                            this.props.navigator.pop();
                        }}
                    >
                        <Text style={{fontSize: 16}}>{label}</Text>
                    </TouchableOpacity>
                )
            }

        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    {listDom}
                </ScrollView>
            </View>
        )
    }
}

const sty = StyleSheet.create({
    row: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        marginBottom: 1,
        flexDirection: 'row'
    },
    icon: {
        height: 16,
        width: 16,
        position: 'absolute',
        right: 12,
        top: 12
    }
});