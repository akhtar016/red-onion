import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./AllFoods.css"
import { Link} from "react-router-dom";
import { useEffect } from "react";

const AllFoods = (props) => {



  const [food, setFood] = useState([]);

  const [foodType, setFoodType] = useState('Lunch');


  useEffect(()=>{
    fetch('http://localhost:4200/food')
    .then(res => res.json())
    .then(data =>  {
      console.log("Data from database", data);
      setFood(data)
    })

  },[])

    //food.sort(function() { return 0.5 - Math.random() });


  const selectedFoods = food.filter (food => food.type === foodType)

  return (
    <section className="food-area my-5">
      <div className="container">
          <nav>
              <ul className="nav justify-content-center">
                  <li onClick={() => setFoodType("Breakfast")} className="nav-item">
                      <span className={foodType === "Breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                    </li>
                  <li onClick={() => setFoodType("Lunch")} className="nav-item">
                      <span className={foodType === "Lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                      </li>
                  <li onClick={() => setFoodType("Dinner")}className="nav-item">
                      <span className={foodType === "Dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                      </li>
                  
              </ul>
          </nav>
        <div className="row my-5">
          {selectedFoods.map(food => (
            <FoodItem food={food}></FoodItem>
          ))}
        </div>
        <div className="text-center">
            {
              props.cart.length>0 ?
              <Link to="/checkout"><button style ={{background:'salmon'}}  className="btn btn-secondary">Check Out Your Food</button></Link>
              :
              <button disabled  className="btn btn-secondary">Check Out Your Food</button>
            }
        </div>
      </div>
    </section>
  );
};

export default AllFoods;
