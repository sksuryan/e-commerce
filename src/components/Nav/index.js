import React from 'react';
import './Nav.css'

class Nav extends React.Component {
    render(){
        return (
            <div className="nav">
                <div className='nav__container'>
                    <div className='nav__logo-container'>
                        <h1 className='nav__logo'>logo</h1>
                        <div className="nav__mobile-options">
                            <h1 className='nav__login login-button'>login</h1>
                            <i className="fas fa-shopping-cart fa-lg nav__mobile-cart"></i>
                        </div>
                    </div>
                    <div className='nav__search-container'>
                        <input type='text' className='nav__search' placeholder='Search'></input>
                        <button className='nav__search-submit'>
                            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <ul className='nav__options'>
                    <li className='login-button'>login</li>
                    <li><i className="fas fa-shopping-cart"></i> Cart</li>
                    <li>about us</li>
                </ul>
            </div>
        );
    }
}

export default Nav;