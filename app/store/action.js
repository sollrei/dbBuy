


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


export function setLogin (user) {
    return {
        type: USER_REGISTERED,
        user: user
    }
}

export function setLogout () {
    return {
        type: USER_LOGOUT,
        user: defaultUser
    }
}