import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {styles} from '../styleSheet';
import config from '../data/config';

const pageData = {
    year: config.searchCompany.year,
    money: config.searchCompany.money,
    status: config.searchCompany.status,
    industry: config.searchCompany.industry,
    area: config.searchCompany.city
};

export default class SearchPage extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        let selected = this.props.selectedId || 0,
            fn = this.props.fn,
            type = this.props.type;


        let listDom = pageData[type].map((item, index) => {

            const id = item.id,
                label = item.label;

            let styleName = (id === 0) ? 'sDefault' : 'sSelect';

            if (id === selected) {
                return (
                    <TouchableOpacity
                        style={sty.row}
                        key={id}
                        onPress={() => {

                            fn(id, label, styleName);
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

                            fn(id, label, styleName);
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