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
import Camera from 'react-native-camera';

import {styles} from '../styleSheet';

const {height, width} = Dimensions.get('window');

export default class CameraSearch extends Component {

    constructor (props) {
        super(props);

        this.state = {
            imgSource: {uri: 'http://image18-c.poco.cn/mypoco/myphoto/20160825/08/5477598420160825085040035.png?300x160_130'}
        }
    }

    takePicture = () => {
        this.camera.capture()
            .then((data) => {
                console.log(data);
                this.setState({
                    imgSource: {uri: data.path}
                })
            })
            .catch(err => console.error(err));
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, paddingTop: 66}}>
                    <Camera
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                        style={sty.preview}
                        aspect={Camera.constants.Aspect.fill}
                        captureTarget={Camera.constants.CaptureTarget.disk}
                    >
                        <TouchableOpacity
                            style={sty.capture}
                            onPress={this.takePicture}
                        >
                            <Text>[CAPTURE]</Text>
                        </TouchableOpacity>
                    </Camera>
                    <Image
                        style={{height: 100, width: 100}}
                        source={this.state.imgSource}
                    />
                </View>
            </View>
        )
    }
}

const sty = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 100,
        width: width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 40
    }
})