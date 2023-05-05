import React from "react";
import Categories from "../food/Categories";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("home")
  return (
    <div>
      <Categories />
    </div>
  );
};

export default Home;
