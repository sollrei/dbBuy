import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import {styles} from '../styleSheet';
import config from '../data/config';

export default class HotPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            animating: true,
            content: ''
        };
    }

    componentWillMount () {
        fetch(config.hotContentUrl)
            .then((res) => res.json())
            .then((res) => {
                setTimeout(() => {
                    this.setState({
                        animating: false,
                        content: res.content
                    })
                }, 1000);
            });
    }

    componentWillUnmount () {

    }

    render () {

        return (
            <ScrollView style={[styles.container, {backgroundColor: '#fff'}]}>
                <Text style={{padding: 20, fontSize: 16, lineHeight: 24}}>{this.state.content}</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[{alignSelf: 'center', marginTop: 100, flex: 1}, {transform: [{scale: 1.5}]}]}
                    size="large"
                />
            </ScrollView>
        )
    }
}