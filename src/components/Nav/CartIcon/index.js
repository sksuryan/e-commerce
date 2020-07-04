import React from 'react';
import {connect} from 'react-redux';

class CartIcon extends React.Component{
    render(){
        return (
            <>
                {this.props.mobile && 
                    <span className='cart-icon'>
                        {this.props.loggedIn && <span className='cart-badge'>{this.props.cartItems}</span>}
                        <span><i className="fas fa-shopping-cart fa-lg nav__mobile-cart"></i></span>
                    </span>}
                {!this.props.mobile && <li>
                    <span className='cart-icon'>
                        { this.props.loggedIn && <span className='cart-badge'>{this.props.cartItems}</span>}
                        <span><i className="fas fa-shopping-cart"></i></span>
                    </span> Cart</li>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.Cart.cartItems,
    loggedIn: state.login.loggedIn
});

export default connect(mapStateToProps)(CartIcon);