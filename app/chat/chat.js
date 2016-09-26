import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ListView,
    TouchableOpacity,
    SegmentedControlIOS,
    ScrollView,
    Dimensions
} from 'react-native';

import {styles} from '../styleSheet';

import ChatList from './chatList';

import ChatFriend from './chatFriend';

const {width} = Dimensions.get('window');

export default class Chat extends Component {

    constructor (props) {
        super(props);

        this.state = {
            segmentedValue: '',
            segmentedIndex: 0,
            width: 0,
            height: 0,
            selectedIndex: 0,
            scrollingTo: null
        }

    }

    componentWillMount () {
        console.log('component will mount: chat');
    }

    handleHorizontalScroll = (e) => {
        let selectedIndex = e.nativeEvent.position;
        if (selectedIndex === undefined) {
            selectedIndex = Math.round(
                e.nativeEvent.contentOffset.x / this.state.width,
            );
        }
        this.setState({
            segmentedIndex: selectedIndex
        })

    };

    render () {
        return (
            <View style={styles.chatWrap}>
                <View style={[styles.line, styles.chatNav]}>
                    <SegmentedControlIOS
                        values={['消息', '好友']}
                        selectedIndex={this.state.segmentedIndex}
                        style={{width: 150}}
                        onValueChange={(value) => {
                            this.setState({
                                segmentedValue: value
                            })
                        }}
                        onChange={(event) => {
                            this.setState({
                                segmentedIndex: event.nativeEvent.selectedSegmentIndex
                            })
                        }}
                    />
                </View>
                <ScrollView
                    contentOffset={{
                        x: this.state.width * this.state.segmentedIndex,
                        y: 0
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    directionalLockEnabled={true}
                    pagingEnabled={true}
                    bounces={false}
                    scrollsToTop={false}
                    scrollEventThrottle={100}
                    removeClippedSubviews={true}
                    onLayout={(e) => {
                        this.setState({
                            width: e.nativeEvent.layout.width,
                            height: e.nativeEvent.layout.height
                        })
                    }}
                    onScroll={this.handleHorizontalScroll}
                >
                    <View style={{flex: 1, width: width}}>
                        <ChatList {...this.props} />
                    </View>
                    <View style={{flex: 1, width: width}}>
                        <ChatFriend {...this.props} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}