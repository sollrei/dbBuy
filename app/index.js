import React, {Component} from 'react';
import {
    View, Text, TabBarIOS, NavigatorIOS
} from 'react-native';

import Company from './company/company';
import Product from './product/product';
import More from './more/more';

export class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selectTab: 'index'
        }
    }

    renderNavigatorIOS (component, title, navigator) {
        return (
            <NavigatorIOS
                style={{flex: 1}}
                initialRoute={{
                    component: component,
                    title: title,
                    passProps: {
                        title: 'hi',
                        navigator: navigator
                    }
                }}
            />
        )
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <TabBarIOS
                >
                    <TabBarIOS.Item
                        title="查企业"
                        icon={require('image!company')}
                        selectedIcon={require('image!companySelect')}
                        selected={this.state.selectTab === 'index'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'index'
                            })
                        }}
                    >
                        <Company />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="找产品"
                        icon={require('image!product')}
                        selectedIcon={require('image!ps')}
                        selected={this.state.selectTab === 'product'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'product'
                            })
                        }}
                    >
                        <Product />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="精彩"
                        icon={require('image!more')}
                        selectedIcon={require('image!moreSelect')}
                        selected={this.state.selectTab === 'more'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'more'
                            })
                        }}
                    >
                        {this.renderNavigatorIOS(More, '精彩', this.props.navigator)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="聊天"
                        icon={require('image!message')}
                        selectedIcon={require('image!messageSelect')}
                        selected={this.state.selectTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'message'
                            })
                        }}
                    >
                        <View><Text>12</Text></View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="我"
                        icon={require('image!my')}
                        selectedIcon={require('image!mySelect')}
                        selected={this.state.selectTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'my'
                            })
                        }}
                    >
                        <View><Text>12</Text></View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}