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
            img="https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg"
            timing="40+"
            pricing="4990"
            cutPrice="12990"
            color="bg-green-300"
          />
        </Link>
        <Link to="/mobileapp-dev" className="w-full">
          <Cards
            title="Mobile App Dev Mastry"
            img="https://miro.medium.com/max/640/0*lXvptcygEtjJY1HG"
            timing="60+"
            pricing="7590"
            cutPrice="16990"
          />
        </Link>
        <Link to="/fullstack" className="w-full">
          <Cards
            title="Full Stack Web Mastry"
            img="https://www.teahub.io/photos/full/22-221879_-net-full-stack-developer.jpg"
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
            img="https://www.mindinventory.com/blog/wp-content/uploads/2019/08/python-pros-cons-1024x512.png"
            timing="44+"
            pricing="5999"
            cutPrice="12300"
          />
        </Link>
        <Link to="/uiuxDesigning" className="w-full">
          <Cards
            title="UI/UX Designing"
            img="https://www.eiosys.com/wp-content/uploads/2021/04/Top-UI-UX-tools.jpeg"
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
            img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-M365HP-1920x720:VP1-539x400"
            timing="30"
            pricing="3990"
            footerText="Coming Soon..."
          />
        </Link>
        <Link to="" className="w-full">
          <Cards
            title="Digital Marketting"
            img="https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg"
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
