import React from 'react';
import './style.css';

class LoginForm extends React.Component{
    render(){
        return (
            <>
                <div className='login-form__overlay'></div>
                <div className='login-form__container'>
                    <div className='login-form__close'>
                        <input className='login-form__close-input' type='checkbox'></input>
                    </div>
                    <form className='login-form'>
                        <div className='login-form__seperator'>
                            <label htmlFor='login-form__email' className='login-form__label'>Enter e-mail:</label>
                            <input type='text' id='login-form__email' className='login-form__field' placeholder='e-mail' required></input>
                        </div>
                        <div className='login-form__seperator'>
                            <label htmlFor='login-form__password' className='login-form__label'>Enter password:</label>
                            <input type='password' id='login-form__password' className='login-form__field' placeholder='Password' required></input>
                        </div>
                        <div className='login-form__seperator'>
                            <button type='submit' className='login-form__login-button'>Login</button>
                        </div>
                        <div className='login-form__seperator'>
                            <a href='google.co.in' className='login-form__forgot-password'>forgot password?</a>
                            <a href='google.co.in' className='login-form__forgot-password'>create new account</a>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default LoginForm;