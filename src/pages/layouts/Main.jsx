import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
