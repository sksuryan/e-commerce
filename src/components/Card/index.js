import React from 'react';
import './style.css';
import AddToCart from '../AddToCart';

class Card extends React.Component{
    render(){
        const {name, mrp, discount,id} = this.props.data;
        const price = mrp*(100-discount)/100;
        return (
            <div className='card'>
                <img className='card__product' src='https://source.unsplash.com/1600x900/?products' alt='Resource not available'></img>
                <div className='card__text'>
                    <h4 className='card__title'>{name}</h4>
                    {discount&&<h5 className='card__description'>{`Save upto ${discount}%!`}</h5>}
                    <h4 className='card__price'>{`₹${price}`}<span className='card__original-price'>{`₹${mrp}`}</span></h4>
                </div>
                <AddToCart className='card__add-to-cart' id={id}/>
            </div>
        );
    }
}

export default Card;