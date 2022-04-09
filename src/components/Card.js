import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

function Card() {
  return (
    <div className="max-w-[1440px] mx-auto my-6">
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 lg:gap-12 m-10">
        <Link to="/frontend-dev">
          <Cards
            title="FrontEnd Dev Mastry"
            img="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123217555/original/f56cae788b09e28b325f5a141d08c42f16959481/front-end-web-development.jpg"
            text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
            text1="exercitationem praesentium nihil."
            text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
            button="Read More"
          />
        </Link>
        <Cards
          title="Mobile App Dev Mastry"
          img="https://miro.medium.com/max/1000/1*8VzYFpyCZEcmuAP-qK6vtA.jpeg"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
          text1="exercitationem praesentium nihil."
          text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
          button="Read More"
        />
        <Cards
          title="Full Stack Web Mastry"
          img="https://www.spec-india.com/wp-content/uploads/2020/11/What-is-full-stack-developer.png"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
          text1="exercitationem praesentium nihil."
          text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
          button="Read More"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 lg:gap-12 m-10">
        <Cards
          title="Python Mastry"
          img="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
          text1="exercitationem praesentium nihil."
          text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
          button="Read More"
        />
        <Cards
          title="UI/UX Designing"
          img="https://www.launchpadapps.com.au/wp-content/uploads/2016/06/Mobile-UX-UI-Design-1030x532.jpg"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
          text1="exercitationem praesentium nihil."
          text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
          button="Read More"
        />
        <Cards
          title="Graphic Design Mastry"
          img="https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/04/gdi-promising-graphic-designing-courses.jpg?fit=1200%2C800&ssl=1"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,"
          text1="exercitationem praesentium nihil."
          text2=" Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil."
          button="Read More"
        />
      </div>
    </div>
  );
}

export default Card;
