import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./AllFoods.css"

const AllFoods = () => {


   const allFoods = [
    {
      name: "Bagel and cream cheese",
      id:'1',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Breakfast sandwich",
      id:'2',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751113/breakfast2_bewi0v.png",
        type:'Breakfast'
    },
    {
      name: "Baked Chicken",
      id:'3',
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751112/breakfast3_bstvjs.png",
        type:'Breakfast'
    },
    {
      name: "Eggs Benedict",
      id:'4',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751109/breakfast1_tbipxs.png",
        type:'Breakfast'
    },
    {
      name: "Toast Croissant Fried egg",
      id:'5',
      price: "19.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751119/breakfast6_jiao3t.png",
        type:'Breakfast'
    },
    {
      name: "Full Breakfast Fried Egg Toast Brunch",
      id:'6',
      price: "3.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584751116/breakfast5_dqnrkr.png",
        type:'Breakfast'
    },
    {
      name: "Healthy Meal Plan",
      id:'7',
      price: "23.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749557/lunch6_i0yfuf.png",
        type:'Lunch'
    },
    {
      name: "Fried Chicken Bento",
      id:'8',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch5_yrdorm.png",
        type:'Lunch'
    },
    {
      name: "Tarragon-Rubbed-Salmon",
      id:'9',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch3_sbfkv7.png",
        type:'Lunch'
    },
    {
      name: "Indian Lunch",
      id:'10',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749555/lunch4_tug8hl.png",
        type:'Lunch'
    },
    {
      name: "Beef Steak",
      id:'11',
      price: "15.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749553/lunch1_ktv6ak.png",
        type:'Lunch'
    },
    {
      name: "Honey Soy Glazed Salmon with Peppers",
      id:'12',
      price: "7.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584749554/lunch2_qdqtqi.png",
        type:'Lunch'
    },
  
    {
      name: "Salmon with Grapefruit and Lentil Salad",
      id:'13',
      price: "9.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752102/dinner6_o8eotn.png",
        type:'Dinner'
    },
    {
      name: "Lemony Salmon Piccata",
      id:'14',
      price: "10.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752104/dinner2_rmlpov.png",
        type:'Dinner'
    },
    {
      name: "Pork Tenderloin with Quinoa Pilaf",
      id:'15',
      price: "12.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752098/dinner5_d8atwz.png",
        type:'Dinner'
    },
    {
      name: "French Fries with cheese",
      id:'16',
      price: "8.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752105/dinner4_sdl25c.png",
        type:'Dinner'
    },
    {
      name: "Garlic Butter Baked Salmon",
      id:'17',
      price: "6.99",
      imgLink:
        "https://res.cloudinary.com/dllb2cjw6/image/upload/v1584752097/dinner3_ji1kzy.png",
        type:'Dinner'
    },
    {
      name: "Baked Chicken",
      id:'18',
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
