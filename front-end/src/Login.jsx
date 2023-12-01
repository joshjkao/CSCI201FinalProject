import React, { useState } from 'react'
import {Typewriter, Cursor } from 'react-simple-typewriter'
import "./login.css"
import { Link } from 'react-router-dom';


const Login = ({logIn}) => { 
  const wordsToAdd = ["cute dog photos ", "adorable pet moments",
  "paw-some adventures",
  "pet-friendly hangouts",
  "furry friend stories",
  "tail-wagging fun",
  "meow-tastic photos",
  "feathered friend updates",
  "snuggle time memories",
  "pet fashion inspiration",
  "whisker-twitching joy",
  "pet parent tips",
  "fetch-tastic playdates",];

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginClick = () => {
    logIn({
      email: username,
      password: password
    });
  };

  return (
    <div className="login"> 
    <div className="loginWrapper"> 
      <div className="loginLeft">
        <h3 className="loginLogo"> petaByte</h3>
        <span className="loginDesc">
            Connect with other pet lovers and share{' '}
            <span className='bold-text'>
            <Typewriter
              words={wordsToAdd}
              loop
              cursor={false}
              delaySpeed={1500}
              delay={1000} />
            <Cursor/>
            </span>
            on petaByte.
          </span>
        </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" onChange={handleUsernameChange}/>
          <input type="password" placeholder="Password" className="loginInput" onChange={handlePasswordChange}/>
          <button className='loginButton' onClick={handleLoginClick}>Log in</button>
          <span className='loginForgot'>Forgot Password?</span>
          <Link to="/signup" className='loginRegisterButtonWrapper'>
            <button className='loginRegisterButton'> Create a new account</button>
          </Link>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Login;
