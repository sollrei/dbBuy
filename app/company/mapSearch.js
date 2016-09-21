import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    StyleSheet,
    Dimensions
} from 'react-native';

import {styles} from '../styleSheet';

import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default class MapSearch extends Component {


    render () {
        return (
            <View style={styles.container}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 113.42,
                        longitude: 34.44,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }


}