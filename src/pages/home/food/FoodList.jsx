import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { toast } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const FoodList = () => {
  useTitle('Food')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const food = useLoaderData();
  const { name, image_url, rating, ingredients, recipe } = food;

  const addToFavorite = () => {
    var value = [name, image_url, rating, ingredients, recipe];
    localStorage.setItem("foods", JSON.stringify(value));
    setIsButtonDisabled(true);
    toast("Successfully saved in local storage")
  };

  return (
    <div className="my-16">
      <div className="flex items-center justify-center h-screen">
        <img className="max-w-full h-screen" src={image_url} alt="Your Image" />
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
        <div>
          <button
            onClick={addToFavorite}
            disabled={isButtonDisabled}
            className="bg-blue-500  text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add To Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
