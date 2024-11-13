import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword} from "firebase/auth";



function Login() {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const { auth} = useContext(FirebaseContext)
  const handleSubmit=async(event)=>{
    event.preventDefault()
    try{
       await signInWithEmailAndPassword(auth,email,password)
       navigate('/')
    }catch(error){
        console.log(error);
        alert(error)
    }
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <Link to='/signup' className='text-dark'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
