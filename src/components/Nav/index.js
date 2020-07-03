import React from 'react';
import './Nav.css';
import AuthForms from '../AuthForms';

import {connect} from 'react-redux';
import { auth } from '../../firebase';
import { LOGIN, LOGOUT } from '../../store/actions/Login';

class Nav extends React.Component {
    constructor(){
        super();
        this.state={
            showLogin: false
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user){
                this.props.login(user);
            } else {
                this.props.logout();
            }
        })
    }

    updateShowLogin(showLogin){
        this.setState({showLogin});
    }

    render(){
        const loggedIn = this.props.loggedIn;
        return (
            <>
            <div className="nav">
                <div className='nav__container'>
                    <div className='nav__logo-container'>
                        <h1 className='nav__logo'>logo</h1>
                        <div className="nav__mobile-options">
                            {
                                !loggedIn && <h1 className='nav__login login-button' key='25515' onClick={() => this.updateShowLogin(true)}>login</h1>
                            }
                            <span><i className="fas fa-shopping-cart fa-lg nav__mobile-cart"></i></span>
                            {
                                loggedIn && <span className='nav__icon'><i className="fas fa-user fa-lg nav__mobile-cart"></i></span>
                            }
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
                    <li><i className="fas fa-shopping-cart"></i> Cart</li>
                    {
                        !loggedIn && <li className='login-button' key='515' onClick={() => this.updateShowLogin(true)}>login</li> 
                    }
                    {
                        loggedIn && <li className='nav__profile'>
                            <div className='nav__profile-button'><i className="fas fa-user"></i> My Profile</div>
                            <div className='nav__hover'>
                                <div className='seperator'><span><i className="fas fa-caret-up fa-lg" aria-hidden="true"></i></span></div>
                                <div className='nav__profile-hover-options'>
                                    <span className='nav__profile-option'>account</span>
                                    <span className='nav__profile-option' onClick={() => auth.signOut()}>logout</span>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
            {this.state.showLogin && <AuthForms updateShowLogin={(showLogin) => this.updateShowLogin(showLogin)}/>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state.login
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(LOGIN(user)),
    logout: () => dispatch(LOGOUT())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);