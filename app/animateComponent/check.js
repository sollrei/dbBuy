import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
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

export default class AnimateCheck extends Component {

    constructor (props) {
        super(props);

        this.state = {
            strokeDashOffset: new Animated.Value(70),
            check: this.props.check
        }


    }

    changeCheck = () => {
        if (!this.state.check) {
            // Animated.spring(
            //     this.state.strokeDashOffset,
            //     {
            //         toValue: 0,
            //         duration: 200,
            //         velocity: 3,
            //         tension: -10,
            //         friction: 1
            //     }
            // ).start();
            Animated.timing(
                this.state.strokeDashOffset,
                {
                    toValue: 0
                }
            ).start();
            this.setState({
                check: true
            })
        } else {
            Animated.timing(
                this.state.strokeDashOffset,
                {
                    toValue: 70
                }
            ).start();

            this.setState({
                check: false
            })
        }

    };

    render () {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={this.changeCheck}
                >
                    <View style={sty.checkWrap}>
                        <View style={sty.checkbox}>
                            <Svg
                                height="22"
                                width="34"
                            >
                                <G fill="none" fill-rule="evenodd" >
                                    <AnimatePath
                                        d="M2,7 L10,15 L22,2"
                                        stroke="#0078FF"
                                        strokeWidth="3"
                                        strokeDasharray="70"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDashoffset={this.state.strokeDashOffset}
                                    />
                                </G>
                            </Svg>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    checkWrap: {
        height: 18,
        width: 18,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ddd'
    },
    checkbox: {
        position: 'absolute',
        left: -4,
        top: -4
    }
});