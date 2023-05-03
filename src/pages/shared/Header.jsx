import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import coverPhoto from '../../assets/cover-photo/chef.jpg'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-8 w-8" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/"
                      ? "bg-yellow-500 text-white"
                      : "text-gray-300"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/blog"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/blog"
                      ? "bg-yellow-500 text-white"
                      : "text-gray-300"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  to="/login"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/login"
                      ? "bg-yellow-500 text-white"
                      : "text-gray-300"
                  }`}
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <Link
                to="/"
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/"
                    ? "bg-yellow-500 text-white"
                    : "text-gray-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/blog"
                    ? "bg-yellow-500 text-white"
                    : "text-gray-300"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/login"
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/login"
                    ? "bg-yellow-500 text-white"
                    : "text-gray-300"
                }`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

        <div
          className="h-64 sm:h-72 md:h-96 lg:h-128 xl:h-144 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        >
          <div className="text-dark text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              Chef-Recipe-Hunter
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Come and taste our food you must loved it
            </p>
          </div>
        </div>
    </>
  );
};

export default Header;
