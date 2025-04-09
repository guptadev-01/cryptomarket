import React, { useState } from 'react'
import './Login.css'
import { login, signUp } from '../Home/Firebase';

const Login = () => {
    const [signIn, setSignIn] = useState(true)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user_auth = async (e) => {
      e.preventDefault();
      if(signIn){
        await login(email, password)
      }else {
        await signUp(firstName, lastName, email, password)
      };
    }

  return (
    <div className='login-page'>
      <form onSubmit={user_auth}>
      <div className="login">
          {signIn ? <></> : <div className="login-name">
              <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name' />
              <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name' />
          </div>}
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          {signIn ? <button type='submit'>Sign In</button> : <button type='submit'>Sign Up</button>}
      </div>
      </form>
      {signIn ? <p onClick={()=>{setSignIn(false)}}>Sign Up?</p> : <p onClick={()=>{setSignIn(true)}}>Sign In?</p>}
    </div>
  )
}

export default Login