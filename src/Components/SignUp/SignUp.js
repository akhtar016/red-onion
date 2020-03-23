import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import GoogleButton from "react-google-button";
import { Nav } from "react-bootstrap";

firebase.initializeApp(firebaseConfig);

const SignUp = (props) => {


  const [user,setUser] = useState({
    isSignedIn: false,
    name: "",
    email:'',
    photoURL:""
  })


  const provider = new firebase.auth.GoogleAuthProvider();


  const handleSignIn = () => {

    firebase.auth().signInWithPopup(provider)
    .then(result =>{

      const {displayName,photoURL, email} = result.user;

      const signInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }

      setUser(signInUser);
      console.log(displayName,email,photoURL)

    })
    .catch(error =>{
      console.log(error)
      console.log(error.message)
    })

    console.log("Google Button is Clicked")


  }

  const createAccount = () => {};

  const handleChange = event => {
    
  };

  return (
    <div className="sign-Up">
      <div className="container">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png"
            alt=""
          />
        </div>

        <form action="" className="text-center">
          <input
            type="text"
            onChange={handleChange}
            name="name"
            id="email"
            placeholder="Name"
            className="input"
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            className="input"
          />
          <br />
          <button onClick={createAccount} className="btn btn-danger myButton">
            Sign Up
          </button>
        </form>

        <div>
          <Link to="/login">
            <p>Already have an account</p>
          </Link>
          </div>

          <div className="d-flex justify-content-center">
            
          <GoogleButton
            onClick={handleSignIn}
          />

          <div>

          {
            user.isSignedIn && 

            <Redirect to="/"></Redirect>
             
            
          }
          </div>
          
        

          </div>

        
      </div>
    </div>
  );
};

export default SignUp;
