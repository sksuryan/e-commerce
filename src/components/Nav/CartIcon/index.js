import React from 'react';
import {connect} from 'react-redux';

class CartIcon extends React.Component{
    render(){
        return (
            <>
                {this.props.mobile && 
                    <span className='cart-icon'>
                        <span className='cart-badge'>{this.props.cartItems}</span>
                        <i className="fas fa-shopping-cart fa-lg nav__mobile-cart"></i>
                    </span>}
                {!this.props.mobile && <li>
                    <span className='cart-icon'>
                        <span className='cart-badge'>{this.props.cartItems}</span>
                        <i className="fas fa-shopping-cart"></i>
                    </span> Cart</li>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.Cart
});

export default connect(mapStateToProps)(CartIcon);