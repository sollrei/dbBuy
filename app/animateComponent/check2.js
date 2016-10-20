import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    View,
    ScrollView,
    ART,
    Dimensions,
    Text
} from 'react-native';

import Morph from 'art/morph/path';
import tweenFunctions from 'tween-functions';

let {
    Surface,
    Shape
} = ART;

let BatmanLogoSVGs = [
    'M 10,0 L 90,0 M 10,40 L 90,40 M 10,80 L 90,80',
    'M 10,40 L 40,0 M 10,40 L 90,40 M 10,40 L 40,80',
    'M 10,0 L 90,0 M 10,40 L 90,40 M 10,80 L 90,80'
];

var BatmanLogoPaths = BatmanLogoSVGs.map((svg) => Morph.Path(svg));

let AnimatePath = Animated.createAnimatedComponent(Shape);

export default class AnimateCheck extends Component {

    constructor (props) {
        super(props);

        this.state = {
            transition: Morph.Tween(BatmanLogoPaths[0], BatmanLogoPaths[1]),
            animLine: 10,
            h: new Animated.Value(0)
        };
    }

    componentWillMount () {
        this._current = 1;
    }

    componentDidMount () {
        Animated.timing(this.state.h, {
            toValue: 100
        }).start();
    }

    nextAnimation = () => {
        console.log('do next animation');
        this._current += 1;
        if (this._current >= BatmanLogoPaths.length) {
            return;
        }

        this.setState({
            transition: Morph.Tween(BatmanLogoPaths[this._current - 1], BatmanLogoPaths[this._current])
        });

        this.animate(null, this.nextAnimation);
    };

    animate (start, callback) {
        requestAnimationFrame((timestamp) => {
            if (!start) {
                start = timestamp;
            }

            let delta = (timestamp - start) / 500;

            console.log(delta);

            if (delta > 1) {
                return callback();
            }

            this.state.transition.tween(delta);
            this.setState(this.state);
            this.animate(start, callback);
        })

    }

    animateLine (args) {

        let {
            startTime,
            startValue,
            endValue,
            duration,
            callback
        } = args;

        requestAnimationFrame((timestamp) => {

            if (!startTime) {
                startTime = timestamp;
                args.startTime = startTime;
            }

            let change = timestamp - startTime;

            if (change > duration) {
                callback();
                return;
            }

            this.setState({
                animLine: tweenFunctions.easeInOutExpo(change, startValue, endValue, duration)
            });

             this.animateLine(args);
        })
    }

    render () {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.animate(null, this.nextAnimation)
                    }}
                >
                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                        <Surface width={100} height={100}>
                            <Shape
                                x={0}
                                y={2}
                                d={this.state.transition}
                                stroke="#000000"
                                strokeWidth="2"
                            />
                        </Surface>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.animateLine({
                            startTime: null,
                            startValue: 10,
                            endValue: 300,
                            duration: 1000,
                            callback: () => {
                                this.setState({
                                    animLine: 300
                                });
                            }
                        })
                    }}
                >
                    <View>
                        <Surface width={300} height={100}>
                            <AnimatePath
                                x={20}
                                y={30}
                                d='M44.1555272,37.7210679 L9.42115219,1.35290388 L8.96939723,0.879899878 L8.631471,1.43991879 C8.56742512,1.54605705 8.44987945,1.74824582 8.2864797,2.04104704 C8.01567278,2.52631461 7.71433047,3.09128028 7.39010075,3.73051367 C6.46503059,5.55433086 5.54042315,7.60973564 4.67753132,9.85341791 C2.41113171,15.7464863 0.970829175,21.8590686 0.756173389,27.9129464 C0.345570894,39.493055 3.19289756,48.0183116 10.7750358,55.0578281 C18.115885,61.8733235 44.0000478,63.7586363 52.3975991,57.1667372 C60.8546498,50.5281322 63.1662796,42.1371015 60.8566021,29.0905728 C59.9785111,24.1305563 57.5964175,20.8219536 54.1817929,18.9033325 C52.7432099,18.0950166 51.2070273,17.5849418 49.6575437,17.3141071 C48.6540252,17.1387019 47.8059663,17.087452 47.1957161,17.1036097 C47.1410532,17.105328 16.2900391,17.1054687 16.2900391,17.1054687'
                                stroke="#000000"
                                strokeWidth="3"
                                //strokeDash={[this.state.animLine,100]}
                                strokeDash={[10, 300]}
                            />
                        </Surface>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Animated.View
                        style={{
                            height: this.state.h,
                            width: 100,
                            backgroundColor: 'red'
                        }}
                    >
                        <Text>hello</Text>
                    </Animated.View>
                </View>
            </View>
        )
    }

}