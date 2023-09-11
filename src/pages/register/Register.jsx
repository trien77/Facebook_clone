import React from 'react'
import "./register.css"
const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">
                Vngsocial
            </h3>
            <span className="loginDesc">
                Connect with friends and the world around on Vngsocial
            </span>
        </div>      
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign up</button>
                <span className="loginForgot">Forgot Password ?</span>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Login
