import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator
} from 'react-native';
import IndexNav from './app/indexNav';

class testProject extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        name: 'home',
                        component: IndexNav
                    }}
                    renderScene={(route, navigator) => {
                        let C = route.component;
                        if (route.component) {
                            return <C {...route.passProps} navigator={navigator} title={route.name} />
                        }
                    }}
                    style={{flex: 1}}
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
