import React, {Component} from 'react';
import {
    ART,
    Animated,
    View,
    TouchableWithoutFeedback
} from 'react-native';

const {
    Surface,
    Shape,
    Group,
    Path
} = ART;

const AnimatedShape = Animated.createAnimatedComponent(Shape);

const HEART_COLOR = [
    'rgba(243,243,243)',
    'rgba(235,65,61)'
];

const HEART_PATH = "M16,29 C15.9970361,29 11.914011,25.472682 8.03173648,20.4590299 C4.14946196,15.4453778 -2.46221558,7.68242391 3.08862305,2.10644531 C8.63946168,-3.46953329 16.1049427,5.07202148 16.0279365,5.07202148 C16.0279365,4.99789663 23.4116905,-3.48231344 28.9511719,2.10644531 C34.4897069,7.69648208 28.0043918,15.4325977 24.1315817,20.4590299 C20.2587715,25.4841842 15.9970361,29 16,29 Z";

const CIRCLE_COUNT = [0,1,2,3,4,5,6];

const CENTER_X = 50,
    CENTER_Y = 50;

export default class AnimateFav extends Component {

    constructor (props) {
        super(props);

        this.state = {
            animation: new Animated.Value(0)
        };

        this.animate = this.animate.bind(this);
    }

    componentWillMount () {

        //  init circle position

        this.setState({
            circlePosition: CIRCLE_COUNT.map((item, index) => {
                return getPosition(index, 30);
            })
        });

        function getPosition (index, radius) {

            const a = 2 * Math.PI * index / 7;

            return {
                x: Math.cos(a) * radius + CENTER_X,
                y: Math.sin(a) * radius + CENTER_Y
            }
        }

    }

    animate () {

        Animated.parallel([
            Animated.timing(this.state.animation, {
                toValue: 28,
                duration: 1000
            })
        ])
        .start();
    }

    renderCircle () {

        let moveUp = this.state.animation.interpolate({
            inputRange: [0, 5.99, 14],
            outputRange: [0, 0, -1.5]
        });

        let moveDown = this.state.animation.interpolate({
            inputRange: [0, 5.99, 14],
            outputRange: [0, 0, 1.5]
        });

        var PARTICLE_COLORS = [
            'rgb(158, 202, 250)',
            'rgb(161, 235, 206)',
            'rgb(208, 148, 246)',
            'rgb(244, 141, 166)',
            'rgb(234, 171, 104)',
            'rgb(170, 163, 186)',
            'rgb(208, 148, 246)'
        ];

        return this.state.circlePosition.map((item, index) =>
            <Group
                x={item.x}
                y={item.y}
                key={index}
                rotation={20 * index}
            >
                <Circle
                    x={moveUp}
                    y={moveUp}
                    scale={this.state.animation.interpolate({
                        inputRange: [0, 20, 28],
                        outputRange: [0, 1, 0]
                    })}
                    fill={PARTICLE_COLORS[index]}
                    stroke={PARTICLE_COLORS[index]}
                    radius={3}
                />
                <Circle
                    x={moveDown}
                    y={moveDown}
                    scale={this.state.animation.interpolate({
                        inputRange: [0, 20, 28],
                        outputRange: [0, 1, 0]
                    })}
                    fill={PARTICLE_COLORS[6 - index]}
                    stroke={PARTICLE_COLORS[6 - index]}
                    radius={2}
                />
            </Group>
        )
    }

    renderStar () {

        let starScale = this.state.animation.interpolate({
            inputRange:  [0, .01, 6, 10, 12, 18],
            outputRange: [1, 0, .1, 1, 1.2, 1],
            extrapolate: 'clamp'
        });

        let starX = this.state.animation.interpolate({
            inputRange:  [0, .01, 6, 10, 12, 18],
            outputRange: [35, 50, 48.5, 35, 32, 35 ],
            extrapolate: 'clamp'
        });

        let starY = this.state.animation.interpolate({
            inputRange: [0, .01, 6, 10, 12, 18],
            outputRange: [35, 50, 48.5, 35, 32, 35 ],
            extrapolate: 'clamp'
        });

        let starColor = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: HEART_COLOR,
            extrapolate: 'clamp'
        });

        return (
            <AnimatedShape
                d={HEART_PATH}
                fill={starColor}
                stroke={starColor}
                scale={starScale}
                x={starX}
                y={starY}
            />
        );
    }

    render () {

        let star = this.renderStar();
        let circle = this.renderCircle();

        return (
            <TouchableWithoutFeedback
                onPress={this.animate}
            >
                <View style={[{height: 100, width: 100, backgroundColor: 'transparent'}, this.props.sty]}>
                    <Surface
                        height="100"
                        width="100">

                        <Circle
                            radius={30}
                            stroke={this.state.animation.interpolate({
                                inputRange: [0, 5],
                                outputRange: ["#ce3586", "#c885ef"],
                                extrapolate: 'clamp'
                            })}
                            fill={this.state.animation.interpolate({
                                inputRange: [0, 5, 6],
                                outputRange: ["#ce3586", "#c885ef", "transparent"],
                                extrapolate: 'clamp'
                            })}
                            x={50}
                            y={50}
                            scale={this.state.animation.interpolate({
                                inputRange: [0, 1, 4],
                                outputRange: [0, .3, 1],
                                extrapolate: 'clamp'
                            })}
                            strokeWidth={this.state.animation.interpolate({
                                inputRange: [0, 5.99, 6, 7, 10],
                                outputRange: [0, 0, 3, 2, 0],
                                extrapolate: 'clamp'
                            })}
                        />
                        {star}
                        {circle}
                    </Surface>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

class Circle extends Component {
    render () {

        let radius = this.props.radius;
        let circle = Path().moveTo(0,-radius)
            .arc(0,2 * radius, radius)
            .arc(0,-2 * radius, radius)
            .close();

        return (
            <AnimatedShape d={circle} {...this.props} />
        )
    }
}