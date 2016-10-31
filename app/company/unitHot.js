import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';
import HotPage from '../page/hot';
import config from '../data/config';

export default class Hot extends Component {

    constructor (props) {
        super(props);

        this.state = {
            hotData: [],
            isLoading: true
        };

        // storage.load({
        //     key: 'hot',
        //     autoSync: true,
        //     syncInBackground: true
        // }).then(ret => {
        //     console.log('get cache & change state');
        //
        //     if (ret.length) {
        //         this.setState({
        //             hotData: ret
        //         });
        //
        //     }
        //
        // }).catch(err => {
        //     console.log(err.name);
        // });
    }

    componentWillMount () {



        fetch(config.hotSearchUrl, {
            method: 'POST',
            body: JSON.stringify({})
        })
            .then((res) => {
                return  res.json();
            })
            .then((res) => {
                    // console.log('get http & change state');
                    this.setState({
                        hotData: res,
                        isLoading: false
                    });
            });

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

        // console.log('unitHot: render');

        if (this.state.isLoading) {
            return <View style={styles.hotWrap}>
                <View style={styles.hotTitle}>
                    <Text style={{fontSize: 19, lineHeight: 44}}>热点</Text>
                </View>
                <Text>loading ...</Text>
            </View>
        }

        let rowDom = this.state.hotData.map((item, index) => {
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