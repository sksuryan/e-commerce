import React from 'react';
import { functions } from '../../firebase';

class AddToCart extends React.Component{
    onClickHandler(){
        const addToCart = functions.httpsCallable('addToCart');
        addToCart({productID: this.props.id}).then(d => console.log(d)).catch(err => console.log(err));
    }
    render(){
        return <button onClick={() => this.onClickHandler()} className={this.props.className}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
    }
}

export default AddToCart;