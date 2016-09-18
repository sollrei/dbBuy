import React, {Component} from 'react';
import {
    View, Text, TabBarIOS, NavigatorIOS
} from 'react-native';
import {Index} from './index'

export default class IndexNav extends Component {
    render () {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: '',
                    component: Index
                }}
                style={{flex: 1}}
                navigationBarHidden={true}
            />
        )
    }
}