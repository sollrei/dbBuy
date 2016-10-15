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
import AnimateCheck from '../animateComponent/check';
import AnimateButton from '../animateComponent/button';
export default class FavCompany extends Component {

    constructor (props) {
        super(props);

        this.state = {
            check: false
        }
    }

    componentDidMount () {

    }

    render () {

        return (
            <View style={[styles.container,{paddingTop: 70}]}>
                <Text>react art playground</Text>
                <View style={{padding: 20}}>
                    <AnimateCheck check={false} />
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
                    <Text style={sty.textInputPlaceholder}>Enter Email</Text>
                </View>
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
        zIndex: 1
    },
    textInputPlaceholder: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 38,
        lineHeight: 38,
        color: '#b3b3b3',
        fontSize: 16,
        zIndex: 0
    }
});