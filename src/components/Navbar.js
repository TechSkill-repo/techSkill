import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed bg-gray-800  w-screen py-5 px-16 z-50">
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <a to="/" className="flex items-center gap-2 hover:cursor-pointer">
          <img src={logo} alt="logo" className="w-20 object-cover" />
        </a>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className=" text-gray-400 font-medium text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-gray-400 font-medium text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Contact
            </li>
            <li className="text-gray-400 font-medium text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Services
            </li>
            <li className="bg-orange-500 font-semibold px-4 py-1.5 text-center rounded-md hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Join Now
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:hidden w-full h-full bg-blue-400 p-4"></div>
    </header>
  );
}

export default Navbar;
