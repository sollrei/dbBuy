import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    SegmentedControlIOS,
    TouchableWithoutFeedback,
    ScrollView,
    StyleSheet,
    LayoutAnimation
} from 'react-native';

import {styles} from '../styleSheet';

import ChatPage from './chatPage';

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
                return <Row {...item} key={index} {...this.props}/>
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
                        <Image
                            style={{marginRight: 10}}
                            source={require('image!icon_frd')}
                        />
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
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigator.push({
                            title: item,
                            component: ChatPage,
                            navigationBarHidden: false
                        })
                    }}
                    style={sty.frd}
                    key={i}
                >
                    <Image
                        style={{height: 36, width: 36, borderRadius: 18, marginRight: 10}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <Text style={{fontSize: 17}}>{item}</Text>
                </TouchableOpacity>);
            image = <Image style={{marginRight: 10}} source={require('image!expanded')} />
        } else {
            image = <Image style={{marginRight: 10}} source={require('image!expand_normal')} />
        }

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        this.setState({expanded: !this.state.expanded});
                    }}
                >
                    <View style={sty.group}>
                        {image}
                        <Text style={styles.ft17}>{this.props.group}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 12,
        flexDirection: 'row'
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
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 1,
        paddingLeft: 24,
        flexDirection: 'row'
    }
});