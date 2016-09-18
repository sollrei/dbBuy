import { combineReducers } from 'redux'
import {USER_REGISTERED, USER_LOGOUT} from './action';

let userState = {
    login: false,
    user: {
        'name': 'guest',
        'avatar': ''
    },
    status: null
};

function user (state = userState, action) {
    switch (action.type) {
        case USER_LOGOUT:
            return {
                ...state,
                login: false,
                user: {},
                status: null
            };
        case USER_REGISTERED:
            return {
                ...state,
                login: true,
                user: action.user,
                status: 'login'
            };
        default:
            return state
    }
}

export const appStore = combineReducers({
    user
});

