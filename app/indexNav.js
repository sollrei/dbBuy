import React, {Component} from 'react';
import {
    NavigatorIOS
} from 'react-native';
import ConnectedIndex from './index'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {appStore} from './store/reducer';

const cs = applyMiddleware(thunk)(createStore);
let store = cs(appStore);


export default class IndexNav extends Component {
    render () {
        return (
            <Provider store={store}>
                <NavigatorIOS
                    initialRoute={{
                        title: '',
                        component: ConnectedIndex
                    }}
                    style={{flex: 1}}
                    navigationBarHidden={true}
                />
            </Provider>
        )
    }
}
