import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import {styles} from '../styleSheet';
import AnimateMenuClose from '../animateComponent/menu-close';
import AnimateButton from '../animateComponent/btn';
import AnimateFirework from '../animateComponent/firework';
export default class FavCompany extends Component {

    constructor (props) {
        super(props);

        this.state = {
            check: false,
            emailAnim: new Animated.Value(0),
            mobileAnim: new Animated.Value(0)
        }
    }

    render () {

        return (
            <View style={[styles.container,{paddingTop: 70}]}>
                <ScrollView>
                    <View style={{flex: 1,backgroundColor: '#fff'}}>
                        <AnimateFirework />
                    </View>
                    <Text>react art playground</Text>
                    <View style={{padding: 20}}>
                        <AnimateMenuClose/>
                    </View>
                    <View style={{padding: 20}}>
                        <AnimateButton buttonText="Hi" />
                    </View>
                    <View style={sty.textInputWrap}>
                        <TextInput
                            style={sty.textInput}
                            returnKeyType='next'
                            autoCorrect={false}
                            autoCapitalize="none"
                            onFocus={() => {
                                console.log('on focus');
                                Animated.timing(this.state.emailAnim, {
                                    toValue: 40
                                }).start();
                            }}
                        />
                        <Animated.Text
                            style={[sty.textInputPlaceholder,{
                                transform: [{
                                    translateY: this.state.emailAnim
                                }]
                            }]}
                        >Enter Email</Animated.Text>
                    </View>
                    <View style={sty.textInputWrap}>
                        <TextInput
                            style={sty.textInput}
                            returnKeyType='next'
                            autoCorrect={false}
                            autoCapitalize="none"
                            onFocus={() => {
                                console.log('on focus');
                                Animated.timing(this.state.mobileAnim, {
                                    toValue: 20
                                }).start();
                            }}
                            onBlur={() => {
                                console.log('on blur');
                            }}
                            onChange={(event) => {
                                console.log('onChange: ',event.nativeEvent.text)
                            }}
                            onEndEditing={(event) => {
                                console.log('on end editing:',event.nativeEvent.text)
                            }}
                            onSubmitEditing={(event) => {
                                console.log('on submit editing:', event.nativeEvent.text)
                            }}
                            onSelectionChange={(event) => {
                                console.log('onSelectionChange range: ' +
                                    event.nativeEvent.selection.start + ',' +
                                    event.nativeEvent.selection.end)
                            }}
                            onKeyPress={(event) => {
                                console.log('onKeyPress key: ' + event.nativeEvent.key)
                            }}
                        />
                        <Animated.Text
                            style={[sty.textInputPlaceholder,{
                                transform: [{
                                    translateY: this.state.mobileAnim
                                }]
                            }]}
                        >Enter Mobile</Animated.Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const sty = StyleSheet.create({
    textInput: {
        height: 40
    },
    textInputWrap: {
        height: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
        zIndex: 1,
        marginBottom: 20
    },
    textInputPlaceholder: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 38,
        zIndex: 0,
        flex: 1,
        lineHeight: 38,
        color: '#b3b3b3'
    }
});