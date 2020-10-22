import React, {useState} from 'react'
import  "./Login.css"
import {Link,useHistory} from "react-router-dom";
import { auth } from "./firebase";


function Login() {

    const history = useHistory();

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const login = (event)=>{
         event.preventDefault();

         auth
         .signInWithEmailAndPassword(email,password)
         .then((auth)=>{

                history.push("/");



            })
            .catch((e)=>alert(e.message));
    };


    const register = (event)=>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) =>{

                history.push("/");



            })
            .catch((e)=>alert(e.message));
       
   };

    return (
        <div className="login">
            <Link to="/">

                <img className="login__logo" src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"
                    alt="" ></img>
            </Link>


            <div className="login__container">

                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)}   type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"></input>

                    <button  onClick={login} className="login__signInButton">Sign In</button>

                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button onClick={register} className="login__registerButton" >Create Your Amazon Account</button>


                </form>

            </div>


  
        </div>
    )
}

export default Login
