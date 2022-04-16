import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full lg:h-screen h-full relative">
      <div className="absolute top-0 bg-black bg-opacity-60  left-0 w-full h-full">
        {" "}
      </div>
      <div className='w-full  h-full bg-[url("https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/pt3dMMAKQ0m7zWobyr55_photo-1484417894907-623942c8ee29.webp")] bg-cover bg-center  '>
        <div className="px-16   relative z-40">
          <h1 className="lg:text-6xl lg:pt-44 pt-32 font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize text-center lg:text-left text-3xl">
            Stop studying all day <br /> Now time to{" "}
            <span className="text-orange-400">Learn and earn 💸</span>
          </h1>
          <div className="text-center lg:text-left space-y-3 mt-10">
            <p className="  text-gray-50 lg:text-xl ">
              ✅ &nbsp; How to become a developer in 90 days even if you're a
              complete beginner.
            </p>
            <p className=" text-gray-50 lg:text-xl ">
              {" "}
              👨‍💻 &nbsp; What to get a job in some big tech compnease like make a
              bundle of money.
            </p>
            <p className=" text-gray-50 lg:text-xl ">
              {" "}
              🔥 &nbsp; Learna the technology and be a self confident devloper.
            </p>
            <p className=" text-gray-50 lg:text-xl ">
              {" "}
              💯 &nbsp; We will offer you the best guidence and a first
              placement as a intern.
            </p>
          </div>
          <Link to="/contact" className="flex justify-center lg:justify-start">
            <button className="bg-orange-500 lg:text-[18px] text-[12px] mt-16 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-500 hover:scale-105 duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide mb-10 lg:mb-0">
              CLICK TO BOOK YOUR FIRST <span className="text-black">FREE</span>{" "}
              CLASS!{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
