import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from "../../../hooks/useTitle";

const AllRecipe = ({ recipe }) => {
  useTitle('Recipes')
  return (
    <div className="">
      <img
        src={recipe?.image_url}
        alt=""
        className=""
        style={{ height: "200px", width: "300px" }}
      />
      <h1 className="font-bold pt-5">Name: {recipe?.chef} Recipe</h1>
      
    </div>
  );
};

export default AllRecipe;
