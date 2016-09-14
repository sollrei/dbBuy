import React, {Component} from 'react';
import {
    View, ScrollView,
    Image, Text, TextInput,
    Dimensions, TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';


export default class Cate extends Component {

    renderCateItem (data) {

        return data.map((item, index) =>
            <View
                style={styles.cateItemWrap}
                key={index}
            >
                <TouchableOpacity style={styles.cateItem}>
                    <Text style={styles.darkColor}>{item}</Text>
                </TouchableOpacity>
                <View style={{width: 1,height: 14,backgroundColor: '#e0e0e0'}}></View>
            </View>
        );

    }

    render () {
        return (
            <View style={styles.hotWrap}>
                <View style={styles.cateRow}>
                    <Text style={styles.cateTitle}>电子传媒</Text>
                    <ScrollView
                        horizontal={true}
                        style={styles.cateView}
                    >
                        {this.renderCateItem(['易拉宝','数码管','数码管','数码管','数码管','数码管','数码管','数码管','数码管'])}
                    </ScrollView>
                </View>
                <View style={styles.cateRow}>
                    <Text style={styles.cateTitle}>包装印刷</Text>
                    <ScrollView
                        horizontal={true}
                        style={styles.cateView}
                    >
                        {this.renderCateItem(['易拉宝','数码管','数码管','数码管','数码管','数码管','数码管','数码管','数码管'])}
                    </ScrollView>
                </View>
                <View style={styles.cateRow}>
                    <Text style={styles.cateTitle}>安防照明</Text>
                    <ScrollView
                        horizontal={true}
                        style={styles.cateView}
                    >
                        {this.renderCateItem(['易拉宝','数码管','数码管','数码管','数码管','数码管','数码管','数码管','数码管'])}
                    </ScrollView>
                </View>
            </View>
        )
    }

}