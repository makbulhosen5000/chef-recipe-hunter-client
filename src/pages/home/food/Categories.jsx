import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories,setCategories] = useState([]);
    
    console.log(categories);
    useEffect(()=>{
        fetch("http://localhost:5000/categories/")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error(error));
    },[])
    return (
      <div>
        Category:{categories.length}
        {categories.map((category) => (
          <p>{category.chef}</p>
        ))}
      </div>
    );
};

export default Categories;