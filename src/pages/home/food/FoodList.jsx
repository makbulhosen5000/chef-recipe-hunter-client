import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodList = () => {
     const food = useLoaderData();
     console.log(food);
    return (
        <div>
            food list
        </div>
    );
};

export default FoodList;