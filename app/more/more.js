import React, {Component} from 'react';
import {
    View, ScrollView,
    Image, Text, TextInput,
    TouchableOpacity
} from 'react-native';
import {styles} from '../styleSheet';


export default class More extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.moreWrap}>
                <View style={[styles.moreRow, styles.line]}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_club')}
                    />
                    <Text style={styles.moreTitle}>采购圈12</Text>
                </View>
                <View style={[styles.moreRow, {marginBottom: 32}]}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_place')}
                    />
                    <Text style={styles.moreTitle}>广场</Text>
                </View>
                <View style={styles.moreRow}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_tender')}
                    />
                    <Text style={styles.moreTitle}>微招标</Text>
                    <Text style={styles.moreWait}>敬请期待</Text>
                </View>
            </View>
        )
    }
}