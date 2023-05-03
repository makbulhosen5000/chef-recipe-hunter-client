import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chef from './Chef';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Categories = () => {
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(true);
    
    console.log(categories);
    useEffect(()=>{
        fetch("http://localhost:5000/categories/")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error(error));
          setLoading(false);
    },[])
    return (
      <div className="p-10 mx-auto text-center ">
        {loading ? (
          <span className="text-red-600 text-bold">Loading...</span>
        ) : (
          ""
        )}

        <h1 className="text-2xl mb-10 font-bold">
          <span className="text-red-600">Chef</span> Details
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div className="" key={category.id}>
              <Link
                to={`/categories/${category.id}`}
                className="text-black pt-4"
              >
                <img
                  src={category?.image_url}
                  alt="category image"
                  className=""
                  style={{ height: "200px", width: "300px" }}
                />
                <h1 className="font-bold pt-5">Name: {category?.name}</h1>
                <p className="">Experience: {category?.experience}</p>
                <p className="">Recipe: {category?.recipe} Items</p>
                <p className="">Like: {category?.like}</p>
                <Rating
                  placeholderRating={category?.rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                />
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    View Recipes
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Chef />
      </div>
    );
};

export default Categories;