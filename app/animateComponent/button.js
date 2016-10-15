import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

let AnimatePath = Animated.createAnimatedComponent(Path);

export default class AnimateButton extends Component {

    constructor (props) {
        super(props);

        this.state = {
            widthAnim: new Animated.Value(0)
        }


    }

    changeCheck = () => {
        Animated.spring(
            this.state.widthAnim,
            {
                toValue: 0,
                duration: 200,
                velocity: 3,
                tension: -10,
                friction: 1
            }
        ).start();
    };

    render () {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={this.changeCheck}
                >
                    <Animated.View style={[sty.buttonWrap, {
                        transform: [{
                            scale: this.state.widthAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 1.3],
                            })
                        }]
                    }]}>
                        <Text style={sty.buttonText}>{this.props.buttonText}</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    buttonWrap: {
        height: 60,
        width: 60,
        backgroundColor: '#0078FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});