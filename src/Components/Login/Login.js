import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png"
            alt=""
          />
        </div>

        <form action="" className="text-center">
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
          <button className="btn btn-danger myButton">Log in</button>
        </form>

        <div >
         
            <a id="textSignUp" className="d-flex justify-content-center" href="/signup">Create an account</a>
          
        </div>
      </div>
    </div>
  );
};

export default Login;