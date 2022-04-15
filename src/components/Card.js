import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import webImage from "../assets/webImage.webp";

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
            timing="30"
            pricing="3999"
            color="bg-green-300"
          />
        </Link>
        <Link to="/mobileapp-dev" className="w-full">
          <Cards
            title="Mobile App Dev Mastry"
            img="https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg"
            timing="30"
            pricing="3999"
          />
        </Link>
        <Link to="/fullstack" className="w-full">
          <Cards
            title="Full Stack Web Mastry"
            img="https://www.spec-india.com/wp-content/uploads/2020/11/What-is-full-stack-developer.png"
            timing="30"
            pricing="3999"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1  justify-items-center lg:grid-cols-3 gap-5 lg:gap-20 m-10">
        <Link to="python" className="w-full">
          <Cards
            title="Python Mastry"
            img="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg"
            timing="30"
            pricing="3999"
          />
        </Link>
        <Link to="/uiuxDesigning" className="w-full">
          <Cards
            title="UI/UX Designing"
            img="https://www.launchpadapps.com.au/wp-content/uploads/2016/06/Mobile-UX-UI-Design-1030x532.jpg"
            timing="30"
            pricing="3999"
          />
        </Link>
        <Link to="/graphicDesigning" className="w-full">
          <Cards
            title="Graphic Design Mastry"
            img="https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/04/gdi-promising-graphic-designing-courses.jpg?fit=1200%2C800&ssl=1"
            timing="30"
            pricing="3999"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1  justify-items-center lg:grid-cols-3 gap-5 lg:gap-20 m-10">
        <Link to="" className="w-full">
          <Cards
            title="Eathical Hacking"
            img="https://tetacourse.com/uploads/mini/full/ef/1622837522_complete-ethical-hacking-course-2021-beginner-to-advanced.webp"
            timing="30"
            pricing="3999"
            footerText="Comming Soon..."
          />
        </Link>
        <Link to="/" className="w-full">
          <Cards
            title="MicroSoft Office"
            img="https://toivoiban.com/wp-content/uploads/2020/09/Nhung-dieu-can-biet-ve-microsoft-office.png"
            timing="30"
            pricing="3999"
            footerText="Comming Soon..."
          />
        </Link>
        <Link to="" className="w-full">
          <Cards
            title="Digital Marketting"
            img="https://multichannelmerchant.com/wp-content/uploads/2018/07/digitalmarketing850.jpg"
            timing="30"
            pricing="3999"
            footerText="Comming Soon..."
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
