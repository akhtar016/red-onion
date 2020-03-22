import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link to="/">

          <img
              src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584737489/logo2_ikwqnv.png"
              alt=""
              height="50px"
            />
          
          </Link>
           
          

          <div className="collapse navbar-collapse d-flex justify-content-end">


            <Link to="/checkout">

            <button className="btn btn-link text-secondary text-dark">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            
            </Link>
            



            <Link to="/login" className="nav-link">

            <button
              type="button"
              className="btn btn-link text-secondary text-dark"
            >
              Login
            </button>

            </Link>

            <Link to="/signup">
            <button className="btn btn-danger rounded-pill">Sign up</button>
            </Link>
            
            
          </div>
        </nav>
      </div>

      <section className="banner d-flex text-center align-items-center">
        <div className="container">
          <h1>Best food waiting for your belly</h1>
          <div className="search-box col-md-6 my-5 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search food items"
          />
          <button className="btn btn-danger search-btn btn-rounded">Search</button>


          </div>
          
          
        </div>
      </section>
    </div>
  );
};

export default Navbar;
