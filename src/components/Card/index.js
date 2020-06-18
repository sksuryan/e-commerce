import React from 'react';
import './style.css';

class Card extends React.Component{
    render(){
        return (
            <div className='card'>
                <img className='card__product' src='https://source.unsplash.com/1600x900/?products' alt='Resource not available'></img>
                <div className='card__text'>
                    <h4 className='card__title'>Some random product</h4>
                    <h5 className='card__description'>Save upto 10%!</h5>
                    <h4 className='card__price'>₹500 <span className='card__original-price'>₹600</span></h4>
                </div>
                <button className='card__add-to-cart'><i className="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        );
    }
}

export default Card;