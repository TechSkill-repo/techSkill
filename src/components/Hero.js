import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";
import Card from "./Card";
import Footer from "./Footer";

function Hero() {
  return (
    <div className="w-full h-[100vh]  relative">
      <div className="absolute top-0 bg-black bg-opacity-40  left-0 w-full h-full">
        {" "}
      </div>
      <div className=' w-full h-full bg-[url("https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/pt3dMMAKQ0m7zWobyr55_photo-1484417894907-623942c8ee29.webp")] bg-cover bg-center  '>
        <div className="px-16 top-1/2 -translate-y-1/2 relative z-40">
          <h1 className="lg:text-6xl pt-20 font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize text-center lg:text-left text-4xl">
            Stop studying all day <br /> Now time to{" "}
            <span className="text-orange-400">Learn and earn 💸</span>
          </h1>
          <div className="text-center lg:text-left space-y-3 mt-10">
            <p className="  text-gray-50 text-xl ">
              ✅ &nbsp; How to become a developer in 90 days even if you're a
              complete beginner.
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              👨‍💻 &nbsp; What it takes to get job offers from big FANG tech
              companies like Facebbok.
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              🔥 &nbsp; What it takes to get job offers from big FANG tech
              companies like Facebbok.
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              💯 &nbsp; What it takes to get job offers from big FANG tech
              companies like Facebbok.
            </p>
          </div>
          <Link to="/contact">
            <button className="bg-orange-500 lg:text-[18px] text=[14px] mt-16 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-200 hover:text-black duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide">
              CLICK HERE TO BOOK YOUR FIRST{" "}
              <span className="text-black">FREE</span> CLASS!{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
