/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import {Index} from './app/index';

class testProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        name: 'home',
                        component: Index
                    }}
                    renderScene={(route, navigator) => {
                        let C = route.component;
                        if (route.component) {
                            return <C {...route.passProps} navigator={navigator} title={route.name} />
                        }
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('testProject', () => testProject);