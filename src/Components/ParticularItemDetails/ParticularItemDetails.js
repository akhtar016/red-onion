import React, { useState } from "react";
import { useParams} from "react-router-dom";
import foods from "../../Data/food.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import "./ParticularItemDetails.css";
import Navbar from "../Navbar/Navbar";

const ParticularItemDetails = () => {

  const { key } = useParams();
  const food = foods.find(fd => fd.key === key);

  const [quantity, setQuantity] = useState(1);

  


  return (
    <div>
      {/*<nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584737489/logo2_ikwqnv.png"
            alt=""
            height="50px"
          />
        </Link>
  </nav>*/}


      <div className="navOnProductDetails">

      <Navbar></Navbar>
      </div>

      <div className="food-details my-5 container">
        <div className="row">
          <div className="col-md-6 pr-md-4">
            <h1>{food.name}</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores quaerat cupiditate. Ratione maxime animi, illum
              dolorum vel quam iste quos alias cumque, doloremque placeat
              aspernatur expedita illo ut ducimus!
            </p>
            <div className="d-flex  my-4">
              <h2 className="price">${food.price}</h2>

              <div className="cart-controller ml-3 btn">
                <button
                  class="btn btn-default myBtn"
                  onClick={() => {
                    
                    if (quantity > 1) {
                      setQuantity(quantity - 1);

                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <span className="text">{quantity}</span>

                <button
                  class="btn btn-default myBtn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <button onClick={() => console.log("Item is added")}  className="btn btn-danger rounded-pill mb-2">
              <FontAwesomeIcon icon={faCartArrowDown} /> Add
            </button>
          </div>
          <div className="col-md-6">
            <img height="400px" src={food.imgLink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularItemDetails;
