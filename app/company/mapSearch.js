import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styleSheet';

import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default class MapSearch extends Component {


    render () {

        // return <View><Text>e</Text></View>

        return (
            <View style={styles.container}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        longitudeDelta: 0.008046627804731088,
                        latitude: 34.80592071574652,
                        longitude: 113.50194212496369,
                        latitudeDelta: 0.011399289930722034
                    }}
                    onRegionChangeComplete={(region) => {
                        console.log(region)
                    }}

                >
                    <MapView.Marker
                        coordinate={{
                            longitudeDelta: 0.008046627804731088,
                            latitude: 34.80592071574652,
                            longitude: 113.50194212496369,
                            latitudeDelta: 0.011399289930722034
                        }}
                        image={require('image!local')}
                    />
                    <MapView.Marker
                        coordinate={{
                            longitudeDelta: 0.008046628004308332,
                            latitude: 34.80747995476017,
                            longitude: 113.50020405331485,
                            latitudeDelta: 0.011399074554077515
                        }}
                        image={require('image!local_normal')}
                    />
                    <MapView.Marker
                        coordinate={{
                            longitudeDelta: 0.008046628004251488,
                            latitude: 34.805789225202396,
                            longitude: 113.50149732681314,
                            latitudeDelta: 0.011399308399511199
                        }}
                        image={require('image!local_normal')}
                    />
                    <MapView.Marker
                        coordinate={{
                            longitudeDelta: 0.008046628004308332,
                            latitude: 34.80616737698967,
                            longitude: 113.50272533008948,
                            latitudeDelta: 0.01139925609804493
                        }}
                        image={require('image!local_normal')}
                    />
                    <MapView.Marker
                        coordinate={{
                            longitudeDelta: 0.008046628004251488,
                            latitude: 34.80689854705161,
                            longitude: 113.50362655242596,
                            latitudeDelta: 0.011399154969886638
                        }}
                        image={require('image!local_normal')}
                    />
                </MapView>
                <TouchableOpacity
                    style={sty.back}
                    onPress={() => {
                        this.props.navigator.pop();
                    }}
                >
                    <Image
                        source={require('image!arrow_left')}
                    />
                </TouchableOpacity>
            </View>
        )
    }


}

const sty = StyleSheet.create({
    back: {
        height: 36,
        width: 36,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        position: 'absolute',
        left: 20,
        top: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    }
});