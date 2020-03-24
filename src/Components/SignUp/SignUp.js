import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import GoogleButton from "react-google-button";
import Auth from "../Login/use.auth";


// Initialize Firebase



const SignUp = () => {

   const auth = Auth();
   console.log(auth.signInWithGoogle);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photoURL: ""
  });

  // login with google starts

  // const provider = new firebase.auth.GoogleAuthProvider();

  // const handleSignIn = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       const { displayName, photoURL, email } = result.user;

  //       const signInUser = {
  //         isSignedIn: true,
  //         name: displayName,
  //         email: email,
  //         photo: photoURL
  //       };

  //       setUser(signInUser);
  //       console.log(displayName, email, photoURL);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       console.log(error.message);
  //     });

  //   console.log("Google Button is Clicked");
  // };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(response => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          password: "",
          isValid: "false",
          error: ""
        };

        setUser(signOutUser);
      })
      .catch(error => {});
  };

  //create account through input

  const createAccount = event => {
    if (user.isValid) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const createdUser = { ...user };
          createdUser.isSignedIn = true;
          createdUser.error = "";
          setUser(createdUser);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          const createdUser = { ...user };
          createdUser.isSignedIn = false;
          createdUser.error = error.message;
          setUser(createdUser);
        });
    } else {
      console.log("form is not valid", user);
    }

    event.preventDefault();
    event.target.reset();
  };

  const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const hasNumber = input => /\d/.test(input);

  const handleChange = event => {
    const newUserInfo = {
      ...user
    };

    //perform validation

    let isValid = true;

    if (event.target.email === "email") {
      isValid = is_valid_email(event.target.value);
    }
    if (event.target.name === "password") {
      isValid = event.target.value.length >= 8 && hasNumber(event.target.value);
    } else {
    }

    newUserInfo[event.target.name] = event.target.value;

    newUserInfo.isValid = isValid;
    setUser(newUserInfo);
  };




  const passMatch = () => {

    const pass1 = document.getElementById("password").value;
    const pass2 =  document.getElementById("confirm_password").value;
    
    if (pass1 !== pass2){
      alert("Password should be same")
    }
  }

  return (
    <div className="sign-Up">
      <div className="container">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png"
            alt=""
          />
        </div>

        <form onSubmit={createAccount} className="text-center">
          <input
            required
            type="text"
            onBlur={handleChange}
            name="name"
            id="email"
            placeholder="Name"
            className="input"
          />
          <br />
          <input
            onBlur={handleChange}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            onBlur={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
            required
          />
          <br />

          <input
            onBlur={handleChange}
            type="password"
            name="password"
            id="confirm_password"
            placeholder="Confirm Password"
            className="input"
            required
          />
          <br />

          <button type="submit" onClick={passMatch} className="btn btn-danger myButton">
            Sign Up
          </button>
        </form>

        <div>
          <Link to="/login">
            <p style={{color:"black"}}>Already have an account? <span style={{color:"blue"}}>Log In</span></p>
          </Link>
        </div>

        <div className="d-flex justify-content-center">

          {
                auth.user ? <p>user logged in </p> :
                <GoogleButton onClick={auth.signInWithGoogle} />

          }
          

          <div>{user.isSignedIn && <Redirect to="/"></Redirect>}</div>
        </div>
        <div className="d-flex justify-content-center">
          {user.error && <p id="hide" style={{ color: "red" }}>{(user.error)}</p>}
          


        </div>
      </div>
    </div>
  );
};

export default SignUp;
