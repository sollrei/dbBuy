import React, {Component} from 'react';
import {
    ART,
    Animated,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

let {
    Shape,
    Group,
    Surface,
    Path
} = ART;

let {width} = Dimensions.get('window');

let AnimatedShape = Animated.createAnimatedComponent(Shape);
let AnimatedGroup = Animated.createAnimatedComponent(Group);

const SHOOTING_RADIUS = 5;
const SHOOTING_COLORS = [
    'rgb(0,0,255)',
    'rgb(255,0,0)'
];
const PARTICLE_RADIUS = 20;
const PARTICLE_COUNT = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const PARTICLE_COLORS = [
    'rgba(54, 17, 52, 100)',
    'rgba(176, 34, 140, 100)',
    'rgba(234, 55, 136, 100)',
    'rgba(229, 107, 112, 100)',
    'rgba(243, 145, 160, 100)'
];

export default class AnimateFirework extends Component {

    constructor (props) {
        super(props);

        this.state = {
            fireworks: []
        };

        this.handleAddFirework = this.handleAddFirework.bind(this);

    }

    handleAddFirework (e) {

        let shootingPosition = new Animated.ValueXY({x: width/2, y: 200 - SHOOTING_RADIUS});
        let shootingColor = new Animated.Value(0);
        let particleColor = new Animated.Value(0);
        let particleRadius = new Animated.Value(0);
        let coreOpacity = new Animated.Value(1);
        let particlePositions = PARTICLE_COUNT.map(() => new Animated.ValueXY({x: 0, y: 0}));

        this.state.fireworks.push({
            shootingPosition: shootingPosition,
            shootingColor: shootingColor,
            particleColor: particleColor,
            particleRadius: particleRadius,
            coreOpacity: coreOpacity,
            particlePositions: particlePositions
        });

        var animatedParticles = [
            Animated.timing(particleRadius, { // 小圆半径从0-1
                duration: 700,
                toValue: 1
            }),
            Animated.timing(coreOpacity, { // 透明度从1-0
                duration: 200,
                toValue: 0
            })
        ];

        // 从圆心运动到圆的边上
        let movingParticles = particlePositions.map((particle, i) => {
            var _xy = getXYParticle(PARTICLE_COUNT.length, i, PARTICLE_RADIUS);
            return Animated.timing(particle, {
                duration: 250,
                toValue: _xy
            })
        });

        // 每个点在圆边上对应的位置坐标
        function getXYParticle(total, i, radius) {
            var angle = 360/total*i;
            var x = Math.round((radius*2) * Math.cos(angle - (Math.PI/2)));
            var y = Math.round((radius*2) * Math.sin(angle - (Math.PI/2)));
            return {
                x: x,
                y: y
            }
        }

        animatedParticles = animatedParticles.concat(movingParticles);

        shootingPosition.addListener(this.adjustShootingFillColor.bind(null, shootingColor));
        particleRadius.addListener(this.adjustParticleFill.bind(null, particleColor));

        Animated.sequence([
            Animated.timing(shootingPosition, {
                duration: 300,
                toValue: {
                    y: e.nativeEvent.locationY,
                    x: e.nativeEvent.locationX
                }
            }),
            Animated.parallel(animatedParticles)
        ]).start(this.removeFireWork.bind(this, shootingPosition));

        this.setState(this.state);
    }

    adjustShootingFillColor (shootingColor) {

        Animated.timing(shootingColor, {
            duration: 20,
            toValue: shootingColor.__getAnimatedValue() == 0 ? 1 : 0
        }).start();
    }

    adjustParticleFill (particleColor) {

        var _currentFill = particleColor.__getAnimatedValue(),
            _particleFill = _currentFill === 5 ? 0 : _currentFill + 1;

        Animated.timing(particleColor, {
            duration: 16,
            toValue: _particleFill
        }).start()
    }

    removeFireWork (shootingPosition) {
        this.state.fireworks = this.state.fireworks.filter((item) =>
            item.shootingPosition !== shootingPosition
        );

        this.setState(this.state);
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <TouchableWithoutFeedback
                    onPress={this.handleAddFirework}
                >
                    <View>
                        <Surface width={width} height="200">
                            {
                                this.state.fireworks.map((item, index) => {

                                    let color = item.shootingColor.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: SHOOTING_COLORS
                                    });

                                    let particleFill = item.particleColor.interpolate({
                                        inputRange: [0,1,2,3,4],
                                        outputRange: PARTICLE_COLORS
                                    });

                                    return <AnimatedGroup
                                        key={index}
                                        x={item.shootingPosition.x}
                                        y={item.shootingPosition.y}
                                    >
                                        <AnimatedCircle
                                            opacity={item.coreOpacity}
                                            radius={SHOOTING_RADIUS}
                                            fill={color}
                                        />
                                        <Group>
                                            {
                                                PARTICLE_COUNT.map((v, j) => {
                                                    return <AnimatedCircle
                                                        key={'particle' + j}
                                                        x={item.particlePositions[j].x}
                                                        y={item.particlePositions[j].y}
                                                        scaleX={item.particleRadius}
                                                        scaleY={item.particleRadius}
                                                        radius="2"
                                                        fill={particleFill}
                                                    />
                                                })
                                            }
                                        </Group>
                                    </AnimatedGroup>
                                })
                            }
                        </Surface>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

class AnimatedCircle extends Component {
    render () {
        let radius = this.props.radius;

        let path = Path().moveTo(0, -radius)
            .arc(0, radius * 2, radius)  // arc(x,y,radius)
            .arc(0, radius * -2, radius)
            .close();
        return (
            <AnimatedShape
                d={path}
                {...this.props}
            />
        )
    }
}