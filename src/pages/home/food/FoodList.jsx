import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar,FaStar } from "react-icons/fa";
import Rating from "react-rating";


const FoodList = () => {
     const food = useLoaderData();
     const {name,image_url,rating} = food;
     console.log("food..",food);
     console.log(food);
    return (
      <div className="my-16">
        <div class="flex items-center justify-center h-screen">
          <img class="max-w-full h-screen" src={image_url} alt="Your Image" />
        </div>
        <div className="text-center">
          <h1 className="font-bold">Food Name: {name}</h1>
         
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