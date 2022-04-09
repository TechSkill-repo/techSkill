import React from "react";
import fend from "../assets/fend.png";
import frontend from "../assets/frontend.png";

function Cards({ title, img, text, text1, text2, button }) {
  return (
    <div className="flex-col h-[70vh] cursor-pointer">
      <div className="max-w-sm rounded h-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:scale-[1.02] transition-all ease-in-out duration-150 ">
        <div className="relative h-[35%]">
          <div className="absolute top-0 bg-gray-200 bg-opacity-10  left-0 w-full h-full"></div>
          <img
            src={img}
            alt="Sunset in the mountains"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="text-center px-6 py-4">
          <div className="font-extrabold text-center text-gray-600 text-2xl p-4 mb-2">
            {title}
          </div>
          <p className="text-gray-700 font-medium tracking-wide text-base">
            {text}
            <b>{text1}</b>
          </p>
          <br />
          {text2}
        </div>
        <div className="p-5 flex justify-center items-center">
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-200"
          >
            {button}
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
