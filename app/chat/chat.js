import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ListView,
    TouchableOpacity,
    SegmentedControlIOS
} from 'react-native';

import {styles} from '../styleSheet';

import ChatPage from './chatPage';

import data from '../data/data';

const msg = data.messageData;

export default class Chat extends Component {

    constructor (props) {
        super(props);

        console.log('initial')
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            segmentedValue: '',
            segmentedIndex: 0,
            dataSource: ds.cloneWithRows(data.messageDefault)
        }

    }

    componentWillMount () {
        console.log('component will mount');

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            dataSource: ds.cloneWithRows(msg)
        })
    }

    renderRow (rowData) {
        return (
            <TouchableOpacity
                style={[styles.chatMessage, styles.line]}
                onPress={() => {
                    this.props.navigator.push({
                        title: rowData.title,
                        component: ChatPage,
                        navigationBarHidden: false
                    })
                }}
            >
                <View style={styles.chatAvatar}>
                    <Image
                        style={{height: 36, width: 36, flex: 1, borderRadius: 18}}
                        source={{uri: rowData.avatar}}
                    />
                </View>
                <View>
                    <Text style={styles.chatTitle}>{rowData.title}</Text>
                    <Text style={styles.chatMsg}>{rowData.message}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <View style={styles.chatWrap}>
                <View style={[styles.line, styles.chatNav]}>
                    <SegmentedControlIOS
                        values={['消息', '好友']}
                        selectedIndex={0}
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
                <ListView
                    automaticallyAdjustContentInsets={false}
                    style={styles.chatList}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
}