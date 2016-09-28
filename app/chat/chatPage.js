import React, {Component} from 'react';
import {
    View
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

const DEFAULT_WS_URL = 'ws://localhost:5555/';

export default class ChatPage extends Component {

    constructor (props) {
        super(props);


        this.onSend = this.onSend.bind(this);

        let socket = new WebSocket(DEFAULT_WS_URL);

        this.state = {
            message: [],
            socket: socket,
            socketState: socket.readyState
        };

        socket.onopen = () => {
            // connection opened

            this.state.socket.send('something'); // send a message
        };

        socket.onmessage = (e) => {
            // a message was received

            setTimeout(() => {
                this.onReceive(e.data)
            }, 600);

        };

        socket.onerror = (e) => {
            // an error occurred
            console.log(e.message);

            setTimeout(() => {
                this.onReceive('连接服务器失败,请确认ws服务器开启');
            }, 600);

        };

        socket.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };

    }

    componentWillMount() {

        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 3,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }

    onSend (messages = []) {
        this.setState((previousState) => {

            this.state.socket.send(JSON.stringify(messages));
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    onReceive (msg) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: msg,
                    createdAt: new Date(),
                    user: {
                        _id: 3,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    }
                })
            }
        });
    }

    render () {
        // console.log('render');

        return (
            <View style={{flex: 1}}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        )
    }

}