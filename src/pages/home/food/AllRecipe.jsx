import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const AllRecipe = ({recipe}) => {
    return (
      <div className="">
        <img src={recipe?.image_url} alt="" />
        <h1 className="font-bold pt-5">{recipe?.recipe}</h1>
        <p className="">{recipe?.details}</p>
        <Rating
          placeholderRating={recipe?.rating}
          readonly
          emptySymbol={<FaRegStar />}
          placeholderSymbol={<FaStar />}
          fullSymbol={<FaStar />}
        />
      </div>
    );
};

export default AllRecipe;