import React from "react";
import skill from "../assets/skills.png";
import { AiOutlineRight } from "react-icons/ai";

function Card() {
  return (
    <>
      <h1 className="text-center pt-10 text-[36px] font-bold text-gray-800   w-1/2 m-auto">
        Our Plans for you 🔥
      </h1>
      <div className="flex flex-wrap justify-evenly align-middle mt-20">
        <div className="h-full p-5 rounded-lg w-1/3 shadow-2xl">
          <div className="">
            <img className="h-56 w-full" src={skill} />
          </div>
          <h1 className="pt-7 pl-2 text-3xl font-extrabold text-gray-600">
            TECH SKILLS
          </h1>
          <p className="pl-2 pt-5 font-normal text-gray-700">
            Empower yourself or your team to develop the skills critical to
            delivering on your career goals and initiatives with our tech skills
            platform.
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            Take a skill assessment <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            View All our Plans <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            For individual <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            View all our courses <AiOutlineRight />
          </p>
          <button className="ml-2 mt-10 bg-gradient-to-r from-orange-500 to-gray-500 px-[34px] py-[18px] text-[15px] font-bold text-white">
            View More
          </button>
        </div>
        <div className="h-full p-5 rounded-lg w-1/3 shadow-2xl">
          <div>
            <img
              className="rounded-lg h-56 w-full"
              src="https://images.squarespace-cdn.com/content/v1/54f62cc5e4b03dc2ab4c1f4b/1604889466580-DTMOL39O717CDI9UPR3B/Blog+Header+%2870%29.png?format=1000w"
            />
          </div>
          <h1 className="pt-7 pl-2 text-3xl font-extrabold text-gray-600">
            INTERNSHIPS PROGRAMS
          </h1>
          <p className="pl-2 pt-5 font-normal text-gray-700">
            Empower yourself or your team to develop the skills critical to
            delivering on your career goals and initiatives with our tech skills
            platform.
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            Take a skill assessment <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            View All our Plans <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            For individual <AiOutlineRight />
          </p>
          <p className="flex justify-between items-center pl-2 pt-5 border-b-2 text-gray-400 pb-2">
            View all our courses <AiOutlineRight />
          </p>
          <button className="ml-2 mt-10 bg-gradient-to-r from-orange-500 to-gray-500 px-[34px] py-[18px] text-[15px] font-bold text-white">
            View More
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly align-middle mt-20">
        <div className="flex flex-col w-fit align-middle h-fit bg-gradient-to-r from-gray-700 to-pink-600 px-[165px] pt-[50px] pb-[50px] rounded-xl">
          <h1 className="text-center text-[25px] font-extrabold text-white">
            Ready to get started with <br /> Pluralsight Skills?
          </h1>
          <p className="text-center p-5 text-white font-semibold">
            Develop better. Deliver better.x
          </p>
          <button className="justify-center bg-gradient-to-r from-orange-500 to-gray-500 px-[45px] py-[18px] text-[15px] font-bold text-white">
            View More
          </button>
        </div>

        <div className="flex flex-col w-fit align-middle h-fit bg-gradient-to-r from-gray-700 to-blue-400 px-[165px] pt-[50px] pb-[50px] rounded-xl">
          <h1 className="text-center text-[25px] font-extrabold text-white">
            Ready to get started with <br />
            Pluralsight Flow?
          </h1>
          <p className="text-center p-5 text-white font-semibold">
            Unlock your people.
          </p>
          <button className="justify-center bg-gradient-to-r from-orange-500 to-gray-500 px-[45px] py-[18px] text-[15px] font-bold text-white">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
