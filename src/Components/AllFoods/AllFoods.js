import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./AllFoods.css"

const AllFoods = () => {


  const allFoods = [
    {
      name: "Bagel and cream cheese",
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Breakfast sandwich",
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751113/breakfast2_bewi0v.png",
        type:'Breakfast'
    },
    {
      name: "Baked Chicken",
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751112/breakfast3_bstvjs.png",
        type:'Breakfast'
    },
    {
      name: "Eggs Benedict",
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751109/breakfast1_tbipxs.png",
        type:'Breakfast'
    },
    {
      name: "Toast Croissant Fried egg",
      price: "19.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751119/breakfast6_jiao3t.png",
        type:'Breakfast'
    },
    {
      name: "Full Breakfast Fried Egg Toast Brunch",
      price: "3.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Healthy Meal Plan",
      price: "23.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749557/lunch6_i0yfuf.png",
        type:'Lunch'
    },
    {
      name: "Fried Chicken Bento",
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch5_yrdorm.png",
        type:'Lunch'
    },
    {
      name: "Tarragon-Rubbed-Salmon",
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch3_sbfkv7.png",
        type:'Lunch'
    },
    {
      name: "Indian Lunch",
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch4_tug8hl.png",
        type:'Lunch'
    },
    {
      name: "Beef Steak",
      price: "15.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749553/lunch1_ktv6ak.png",
        type:'Lunch'
    },
    {
      name: "Honey Soy Glazed Salmon with Peppers",
      price: "7.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch2_qdqtqi.png",
        type:'Lunch'
    },
  
    {
      name: "Salmon with Grapefruit and Lentil Salad",
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752102/dinner6_o8eotn.png",
        type:'Dinner'
    },
    {
      name: "Lemony Salmon Piccata",
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752104/dinner2_rmlpov.png",
        type:'Dinner'
    },
    {
      name: "Pork Tenderloin with Quinoa Pilaf",
      price: "12.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752098/dinner5_d8atwz.png",
        type:'Dinner'
    },
    {
      name: "French Fries with cheese",
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752105/dinner4_sdl25c.png",
        type:'Dinner'
    },
    {
      name: "Garlic Butter Baked Salmon",
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752097/dinner3_ji1kzy.png",
        type:'Dinner'
    },
    {
      name: "Baked Chicken",
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752099/dinner1_aqmcmu.png",
        type:'Dinner'
    }
  ];

  const [foodType, setFoodType] = useState('Lunch');

  const selectedFoods = allFoods.filter (food => food.type == foodType)

  return (
    <section className="food-area my-5">
      <div className="container">
          <nav>
              <ul className="nav justify-content-center">
                  <li onClick={() => setFoodType("Breakfast")} className="nav-item">
                      <span to="Breakfast" className={foodType === "Breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                    </li>
                  <li onClick={() => setFoodType("Lunch")} className="nav-item">
                      <span to="Breakfast" className={foodType === "Lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                      </li>
                  <li onClick={() => setFoodType("Dinner")}className="nav-item">
                      <span to="Breakfast" className={foodType === "Dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
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
