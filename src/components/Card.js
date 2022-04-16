import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import webImage from "../assets/webImage.webp";
import mobileImage from "../assets/mobileImage.jpeg";
import fullStack from "../assets/fullstack.png";
import python from "../assets/python.jpeg";
import uiux from "../assets/uiux.jpeg";
import gd from "../assets/gd.webp";

function Card() {
  return (
    <div className="max-w-[1440px] mx-auto my-6 py-10">
      <h1 className="text-center text-5xl font-extrabold pb-10 text-gray-600">
        Explore our cources...💯
      </h1>
      <div className="grid grid-cols-1  justify-items-center lg:grid-cols-3 gap-5 lg:gap-20 m-10">
        <Link to="/frontend-dev" className="w-full">
          <Cards
            title="Website Mastery"
            img={webImage}
            timing="40+"
            pricing="4990"
            cutPrice="12990"
            color="bg-green-300"
          />
        </Link>
        <Link to="/mobileapp-dev" className="w-full">
          <Cards
            title="Mobile App Dev Mastry"
            img={mobileImage}
            timing="60+"
            pricing="7590"
            cutPrice="16990"
          />
        </Link>
        <Link to="/fullstack" className="w-full">
          <Cards
            title="Full Stack Web Mastry"
            img={fullStack}
            timing="80+"
            pricing="8990"
            cutPrice="23000"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1  justify-items-center lg:grid-cols-3 gap-5 lg:gap-20 m-10">
        <Link to="python" className="w-full">
          <Cards
            title="Python Mastry"
            img={python}
            timing="44+"
            pricing="5999"
            cutPrice="12300"
          />
        </Link>
        <Link to="/uiuxDesigning" className="w-full">
          <Cards
            title="UI/UX Designing"
            img={uiux}
            timing="25+"
            pricing="3990"
            cutPrice="7000"
          />
        </Link>
        <Link to="/graphicDesigning" className="w-full">
          <Cards
            title="Graphic Design Mastry"
            img={gd}
            timing="30+"
            pricing="4999"
            cutPrice="8000"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1  justify-items-center lg:grid-cols-3 gap-5 lg:gap-20 m-10">
        <Link to="" className="w-full">
          <Cards
            title="Eathical Hacking"
            img="https://tetacourse.com/uploads/mini/full/ef/1622837522_complete-ethical-hacking-course-2021-beginner-to-advanced.webp"
            timing="30"
            pricing="8990"
            cutPrice="9990"
            footerText="Coming Soon..."
          />
        </Link>
        <Link to="/" className="w-full">
          <Cards
            title="MicroSoft Office"
            img="https://toivoiban.com/wp-content/uploads/2020/09/Nhung-dieu-can-biet-ve-microsoft-office.png"
            timing="30"
            pricing="3990"
            footerText="Coming Soon..."
          />
        </Link>
        <Link to="" className="w-full">
          <Cards
            title="Digital Marketting"
            img="https://multichannelmerchant.com/wp-content/uploads/2018/07/digitalmarketing850.jpg"
            timing="30"
            pricing="5990"
            cutPrice="12000"
            footerText="Coming Soon..."
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
