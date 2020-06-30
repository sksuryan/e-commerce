import React from 'react';
import './Nav.css'
import LoginForm from '../LoginForm'

class Nav extends React.Component {
    constructor(){
        super();
        this.state={
            showLogin: false
        }
    }

    updateShowLogin(showLogin){
        this.setState({showLogin});
    }

    render(){
        return (
            <>
            <div className="nav">
                <div className='nav__container'>
                    <div className='nav__logo-container'>
                        <h1 className='nav__logo'>logo</h1>
                        <div className="nav__mobile-options">
                            <h1 className='nav__login login-button' onClick={() => this.updateShowLogin(true)}>login</h1>
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
                    <li className='login-button' onClick={() => this.updateShowLogin(true)}>login</li>
                    <li><i className="fas fa-shopping-cart"></i> Cart</li>
                    <li>about us</li>
                </ul>
            </div>
            {this.state.showLogin && <LoginForm updateShowLogin={(showLogin) => this.updateShowLogin(showLogin)}/>}
            </>
        );
    }
}

export default Nav;