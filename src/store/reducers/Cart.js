const initialState = {
    cartItems: 0,
    cart: []
}

const Cart = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE': 
            let {cartItems, cart} = action.data;
            return ({cartItems, cart});
        case 'RESET': 
            return ({...initialState});
        default: 
            return (state);
    }
}

export default Cart;