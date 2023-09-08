import React, {useState}from 'react'
import "./Login.css"
import photo from "../image/logo_white_One.png"
import {Link, useNavigate} from "react-router-dom"
import  {auth} from "../firebase"
import  {createUserWithEmailAndPassword} from "firebase/auth"
import  {signInWithEmailAndPassword} from "firebase/auth"


function Login() {  
  const history = useNavigate()
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const signIn = (e) => {    
    e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          console.log(userCredencial)  
          if (userCredencial){
            history('/')
          }    
        })
      .catch(error => alert(error.message))
  }  

  const register = (e) => {
    e.preventDefault()      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          console.log(userCredencial)
          if (userCredencial){
            history('/')
          }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to= "/" >
        <img 
          className='login_logo'
          src={photo}/> 
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>
        <form >
          <h5>Email</h5>
          <input 
            type="email" 
            placehoder="Enter your email"
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input 
            type="password" 
            placehoder="Enter your password"
            value={password} 
            onChange={e =>setPassword(e.target.value)}/>
        </form>
          <button onClick={signIn} className='login_signInButton' >Sign In</button>      
        <p>
          By continuing, you agree to Amazon's - Clone Conditions of Use and Privacy Notice.
        </p>
        <button  onClick={register} className='login_registerButton' >
          Create your Amazon - Clone acount
        </button>
      </div>
    </div>
  )
}

export default Login
