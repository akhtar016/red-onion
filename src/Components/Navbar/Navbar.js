import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="#">
            {" "}
            <img
              src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584737489/logo2_ikwqnv.png"
              alt=""
              height="50"
            />
          </a>

          <div className="collapse navbar-collapse d-flex justify-content-end">
            <button className="btn btn-link text-secondary text-dark">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button
              type="button"
              className="btn btn-link text-secondary text-dark"
            >
              Login
            </button>
            <button className="rounded-pill btn btn-danger">Sign up</button>
          </div>
        </nav>
      </div>

      <div className="banner d-flex justify-content-center align-items-center">
          
          <div>
          <h1>Best food waiting for your belly</h1>
          <input type="text" className="input" placeholder="Search food items"/>
          <button className="btn btn-danger rounded-top">Search</button>
          
          </div>


          
         
        
      </div>

      
      
    </div>
  );
};

export default Navbar;
