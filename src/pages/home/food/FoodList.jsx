import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar,FaStar } from "react-icons/fa";
import Rating from "react-rating";


const FoodList = () => {
     const food = useLoaderData();
     const { name, image_url, rating, ingredients,recipe } = food;
     console.log("food..",food);
     console.log(food);
    return (
      <div className="my-16">
        <div className="flex items-center justify-center h-screen">
          <img
            className="max-w-full h-screen"
            src={image_url}
            alt="Your Image"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold">Food Name: {name}</h1>
          <p className="font-bold">Ingredients: {ingredients}</p>
          <p className="font-bold">Recipe: {recipe}</p>

          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </div>
      </div>
    );
};

export default FoodList;