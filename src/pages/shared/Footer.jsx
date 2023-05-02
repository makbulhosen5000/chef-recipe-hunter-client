import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white text-center sm:text-left mb-2 sm:mb-0">
          <p>&copy; 2023 All rights reserved here.</p>
        </div>
        <div className="text-white text-center">
          <p>Designed and Developed by CodingDuck</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
