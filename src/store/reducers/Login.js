const initialState = {
    loggedIn: false,
    user: null
}

const login = (state = initialState, action) => {
    let {loggedIn, user} = state;
    switch(action.type){
        case 'LOGIN':
            loggedIn = true;
            user = action.user;
            return ({loggedIn,user});
        case 'LOGOUT':
            loggedIn = false;
            user = null;
            return ({loggedIn,user});
        default:
            return ({...state});
    }
}

export default login;