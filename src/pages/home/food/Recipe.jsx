import React, { useEffect, useState } from "react";

import AllRecipe from "./AllRecipe";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch("https://chef-recipe-hunter-server-mhakash5000.vercel.app/recipe")
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error(error));
      setLoading(false);
    },5000)
  }, []);

  return (
    <div className="pr-3 text-center">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        ""
      )}
      <h1 className="text-2xl mb-10 font-bold">
        <span className="text-red-600">Chef</span> Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <AllRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
