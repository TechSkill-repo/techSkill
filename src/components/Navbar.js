import React, { useState } from "react";
import logo from "../assets/techlogo.png";
import { Link } from "react-router-dom";
import { FcServices } from "react-icons/fc";

function Navbar() {
  return (
    <>
      <header className="fixed bg-black opacity-90 w-screen py-5 px-10 z-50">
        <div className="hidden md:flex w-full h-full item-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:cursor-pointer">
            <img src={logo} alt="logo" className="w-48 object-cover" />
          </Link>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8 ">
              <Link to="/">
                <li className=" text-gray-50 font-light text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
                  PatnerShip
                </li>
              </Link>
              <Link to="">
                <li className="flex  items-center text-gray-50 font-light text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Meetup
                </li>
              </Link>
              <li className=" font-medium text-base hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
                <FcServices className="text-2xl" />
              </li>
              <Link to="/contact">
                <li className="bg-orange-500 font-semibold px-4 py-1.5 text-center rounded-md hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Join Now
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-between md:hidden w-full h-full p-1">
          <Link to="/" className="flex items-center gap-2 hover:cursor-pointer">
            <img src={logo} alt="logo" className="w-48 object-cover" />
          </Link>
          <div className="bg-orange-500 text-sm font-semibold px-2 lg:px-4 py-2 lg:py-1.5 text-center rounded-md hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
            Join Now
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
