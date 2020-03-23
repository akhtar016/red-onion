import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./AllFoods.css"

const AllFoods = () => {


    /** I have used both like array and data from data folder which is in json format */


   const allFoods = [
    {
      name: "Bagel and cream cheese",
      key:'bagel-and-cream-cheese',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Breakfast sandwich",
      key:'breakfast-sandwich',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751113/breakfast2_bewi0v.png",
        type:'Breakfast'
    },
    {
      name: "Baked Chicken",
      key:'baked-chicken',
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751112/breakfast3_bstvjs.png",
        type:'Breakfast'
    },
    {
      name: "Eggs Benedict",
      key:'eggs-benedict',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751109/breakfast1_tbipxs.png",
        type:'Breakfast'
    },
    {
      name: "Toast Croissant Fried egg",
      key:'toast-croissant-fried-egg',
      price: "19.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751119/breakfast6_jiao3t.png",
        type:'Breakfast'
    },
    {
      name: "Full Breakfast Fried Egg Toast Brunch",
      key:'full-breakfast-fried-egg-toast-brunch',
      price: "3.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Healthy Meal Plan",
      key:'healthy-meal-plan',
      price: "23.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749557/lunch6_i0yfuf.png",
        type:'Lunch'
    },
    {
      name: "Fried Chicken Bento",
      key:'fried-chicken-bento',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch5_yrdorm.png",
        type:'Lunch'
    },
    {
      name: "Tarragon Rubbed Salmon",
      key:'tarragon-rubbed-salmon',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch3_sbfkv7.png",
        type:'Lunch'
    },
    {
      name: "Indian Lunch",
      key:'indian-lunch',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch4_tug8hl.png",
        type:'Lunch'
    },
    {
      name: "Beef Steak",
      key:'beef-steak',
      price: "15.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749553/lunch1_ktv6ak.png",
        type:'Lunch'
    },
    {
      name: "Honey Soy Glazed Salmon with Peppers",
      key:'honey-soy-glazed-salmon-with-peppers',
      price: "7.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch2_qdqtqi.png",
        type:'Lunch'
    },
  
    {
      name: "Salmon with Grapefruit and Lentil Salad",
      key:'salmon-with-grapefruit-and-lentil-salad',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752102/dinner6_o8eotn.png",
        type:'Dinner'
    },
    {
      name: "Lemony Salmon Piccata",
      key:'lemony-salmon-piccata',
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752104/dinner2_rmlpov.png",
        type:'Dinner'
    },
    {
      name: "Pork Tenderloin with Quinoa Pilaf",
      key:'pork-tenderloin-with-quinoa-pilaf',
      price: "12.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752098/dinner5_d8atwz.png",
        type:'Dinner'
    },
    {
      name: "French Fries with cheese",
      key:'french-fries-with-cheese',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752105/dinner4_sdl25c.png",
        type:'Dinner'
    },
    {
      name: "Garlic Butter Baked Salmon",
      key:'garlic-butter-baked-salmon',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752097/dinner3_ji1kzy.png",
        type:'Dinner'
    },
    {
      name: "Baked Chicken",
      key:'baked-chicken',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752099/dinner1_aqmcmu.png",
        type:'Dinner'
    }
  ];

  allFoods.sort(function() { return 0.5 - Math.random() });

  const [foodType, setFoodType] = useState('Lunch');

  

 

  const selectedFoods = allFoods.filter (food => food.type === foodType)

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
            <button disabled  className="btn btn-secondary">Check Out Your Food</button>
        </div>
      </div>
    </section>
  );
};

export default AllFoods;
