import React from 'react';

const FoodItem = (props) => {


    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center">
                <img src={props.food.imgLink} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h4>{props.food.name}</h4>
                    
                    <p>How to Dream About Future</p>
                    <h5>$ <span>{props.food.price}</span> </h5>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;