import React from 'react';
import {auth} from '../../firebase';
import './style.css';

class LoginForm extends React.Component{

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    completeLogin(e){
        e.preventDefault();
        const {email,password} = this.state;
        auth.signInWithEmailAndPassword(email,password).then(d => console.log(d)).catch(err => console.log(err.message));
        this.setState({email: '', password: ''});
    }

    updateField(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className='login-form__overlay' onClick={() => this.props.updateShowLogin(false)}>
                <div className='login-form__container' onClick={(e) => e.stopPropagation()}>
                    <div className='login-form__close' onClick={() => this.props.updateShowLogin(false)}></div>
                    <form className='login-form'>
                        <div className='login-form__seperator'>
                            <label htmlFor='login-form__email' className='login-form__label'>Enter e-mail:</label>
                            <input 
                                type='text' 
                                name='email' 
                                className='login-form__field' 
                                placeholder='e-mail' 
                                onChange={(e) => this.updateField(e)} 
                                value={this.state.email}
                                required>
                            </input>
                        </div>
                        <div className='login-form__seperator'>
                            <label htmlFor='login-form__password' className='login-form__label'>Enter password:</label>
                            <input 
                                type='password' 
                                name='password' 
                                className='login-form__field' 
                                placeholder='Password' 
                                onChange={(e) => this.updateField(e)} 
                                value={this.state.password}
                                required>
                            </input>
                        </div>
                        <div className='login-form__seperator'>
                            <button type='submit' className='login-form__login-button' onClick={(e) => this.completeLogin(e)}>Login</button>
                        </div>
                        <div className='login-form__seperator'>
                            <a href='google.co.in' className='login-form__forgot-password'>forgot password?</a>
                            <a href='google.co.in' className='login-form__forgot-password'>create new account</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;