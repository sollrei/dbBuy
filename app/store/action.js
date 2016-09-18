


export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_LOGOUT = 'USER_LOGIN';


let testUser = {
    'name': 'test user',
    'avatar': ''
};

let defaultUser = {
    'name': 'guest',
    'avatar': ''
};


export function setLogin () {
    console.log('set login');
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: USER_REGISTERED,
                user: testUser
            })
        }, 1000)
    }
}

export function setLogout () {
    return {
        type: USER_LOGOUT,
        user: defaultUser
    }
}