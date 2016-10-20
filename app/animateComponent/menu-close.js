import React, {Component} from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import Svg, {
    G,
    Path
} from 'react-native-svg';


let AnimatePath = Animated.createAnimatedComponent(Path);

export default class AnimateMenuClose extends Component {

    constructor (props) {

        super(props);

        this.state = {
            strokeDashOffset: new Animated.Value(38),
            strokeDashOffset2: new Animated.Value(38)
        }
    }

    changeCheck = () => {

        Animated.spring(
            this.state.strokeDashOffset,
            {
                toValue: 243
            }
        ).start();

        Animated.spring(
            this.state.strokeDashOffset2,
            {
                toValue: 299
            }
        ).start();

    };

    render () {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={this.changeCheck}
                >
                    <View style={{backgroundColor: '#fff', height: 100, width: 100}}>
                        <View style={{position: 'absolute', left: 20, top: 20}}>
                            <Svg
                                height="100"
                                width="100"
                            >
                                <G fill="none" fill-rule="evenodd" >
                                    <AnimatePath
                                        x={2}
                                        Y={5}
                                        d="M46,35 L11,0 C11,0 1,9.6875 1,25 C1,41.6308594 6.0810745,46.1384117 13.6632128,53.1779282 C17.5736061,56.8084711 27.512207,60 36,60 C44.487793,60 50.2958102,58.0913701 55.285776,55.2868373 C64.6923828,50 66.8950195,36.2988281 66,31.2988281 C65.1049805,26.2988281 63.446222,23.9164637 59.6625977,20.2792969 C55.8789733,16.64213 50,15 50,15 L22,15"
                                        stroke="#0078FF"
                                        strokeWidth="3"
                                        strokeDasharray="28,215"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDashoffset={this.state.strokeDashOffset}
                                    />
                                </G>
                            </Svg>
                        </View>
                        <View style={{position: 'absolute', left: 24, top: 9}}>
                            <Svg
                                height="100"
                                width="100"
                            >
                                <G fill="none" fill-rule="evenodd" >
                                    <AnimatePath
                                        x={2}
                                        Y={5}
                                        d="M41.2796519,26.0245349 L6,61 C6,61 9.6692888,65.2191044 11.2796519,66 C16.6070152,68.5833396 21,71 31,71 C36.7103461,71 48.0351951,68.9087598 56,61 C62.3732791,54.6715671 66.237877,43.3112446 66,36 C65.4648437,19.5517578 61.4860528,13.153582 51.2796519,6.02453494 C45.8120954,2.2055131 41,1 31,1 C21,1 16.2208167,3.20568352 11.2796519,6.02453494 C1.64172735,11.5228088 1,21.7133789 1,26.0245349 C1,30.1727924 4.99361323,39.0689113 8.265625,41.7270508 C12.3779297,45.0678332 16.8938243,45.9792132 17,46 L45,46"
                                        stroke="#0078FF"
                                        strokeWidth="3"
                                        strokeDasharray="28,271"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDashoffset={this.state.strokeDashOffset2}
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
