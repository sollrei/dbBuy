import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    SegmentedControlIOS,
    ScrollView,
    Dimensions,
    StyleSheet,
    LayoutAnimation
} from 'react-native';

import {styles} from '../styleSheet';

export default class ChatFriend extends Component {
    constructor (props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    render () {

        let list = [{group: '营销好友', items: ['陈琦', '玉芬']}, {group: '采购好友', items: ['陈琦', '玉芬']}]
            .map((item, index) => {
                return <Row {...item} key={index} />
            });
        return (
            <View style={{flex: 1}}>
                <View style={sty.search}>
                    <TextInput
                        placeholer="搜索"
                        style={sty.searchInput}
                    />
                </View>
                <ScrollView style={{paddingBottom: 120, flex: 1}}>
                    <View style={sty.newFriend}>
                        <Text style={styles.ft17}>新朋友</Text>
                    </View>
                    {list}
                </ScrollView>
            </View>
        )
    }
}

class Row extends Component {

    constructor (props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    render () {
        let list, image;
        if (this.state.expanded) {
            list = this.props.items.map((item, i) =>
                <View style={sty.frd} key={i}>
                    <Text>{item}</Text>
                </View>);
            image = <Image style={{height: 12, width: 12}} source={require('image!expanded')} />
        } else {
            image = <Image source={require('image!expand_normal')} />
        }

        return (
            <View>
                <TouchableOpacity
                    style={sty.group}
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        this.setState({expanded: !this.state.expanded});
                    }}
                >
                    {image}
                    <Text style={styles.ft17}>{this.props.group}</Text>
                </TouchableOpacity>
                {list}
            </View>
        )
    }


}

const sty = StyleSheet.create({
    search: {
        height: 44,
        backgroundColor: '#fff',
        marginBottom: 1
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        marginHorizontal: 8,
        marginVertical: 7,
        borderRadius: 4,
        paddingHorizontal: 10
    },
    newFriend: {
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 16,
        paddingLeft: 12
    },
    group: {
        height: 46,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 1,
        paddingLeft: 12,
        flexDirection: 'row'
    },
    frd: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 1,
        paddingLeft: 24
    }
});