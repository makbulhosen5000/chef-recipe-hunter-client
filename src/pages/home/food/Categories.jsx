import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        
        {loading ? <span className='text-red-600 text-bold'>Loading...</span>:''}

        <h1 className="text-2xl mb-10 font-bold">
          <span className="text-red-600">Recipe</span> Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <div className="" key={category.id}>
              <img
                src={category?.image_url}
                alt="category image"
                className="rounded-full w-32 h-32"
              />
              <p key={category.id}>
                <Link to="" className="text-black pt-4">
                  {category?.chef}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Categories;