import React, { useEffect, useState } from 'react';

import AllRecipe from './AllRecipe';

const Chef = () => {

     const [recipes,setRecipes] = useState([]);
     const [loading,setLoading] = useState(true);

     useEffect(() => {
       fetch("http://localhost:5000/recipe")
         .then((res) => res.json())
         .then((data) => setRecipes(data))
         .catch((error) => console.error(error));
         setLoading(false);
     }, []);

    return (
      <div className="p-10 mx-auto text-center">
        {loading ? (
          <span className="text-red-600 text-bold">Loading...</span>
        ) : (
          ""
        )}
        <h1 className="text-2xl mb-10 font-bold">
          <span className="text-red-600">Chef</span> Recipes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <AllRecipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
};

export default Chef;