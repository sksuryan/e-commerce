const LOGIN = (user) => ({
    type: 'LOGIN',
    user
})

const LOGOUT = () => ({
    type: 'LOGOUT'
});

export {LOGIN, LOGOUT};