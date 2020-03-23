import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
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
                <input type="text" name="name" id="email" placeholder="Name" className="input"/>
                <br/>
                <input type="email" name="email" id="email" placeholder="Email" className="input"/>
                <br/>
                <input type="password" name="password" id="password" placeholder="Password" className="input"/>
                <br/>
                <input type="password" name="password" id="password" placeholder="Confirm Password" className="input"/>
                <br/>
                <button className="btn btn-danger myButton">Sign Up</button>
    
            </form>
    
            <div>

                
    
                <Link to="/login">
                <p>Already have an account</p>
                </Link>
              
            </div>
    
            
    
    
          </div>
        </div>
      );



};

export default SignUp;