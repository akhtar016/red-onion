import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
      <div className="container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584737489/logo2_ikwqnv.png"
            alt=""
            height="50px"
          />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item active">
            <Link to="/checkout" className="nav-link">
              <FontAwesomeIcon className="cart-icon" icon={faCartPlus} /> 0
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/signup">
              <button className="btn btn-danger rounded-pill">Sign up</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
