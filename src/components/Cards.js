import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiOutlineCaretRight } from "react-icons/ai";

function Cards({ title, img, timing, pricing, footerText, cutPrice }) {
  return (
    <div className="h-auto w-full cursor-pointer">
      <div className=" w-full flex flex-col rounded h-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:scale-[1.03] transition-all ease-in-out duration-150 ">
        <img
          src={img}
          alt="Sunset in the mountains"
          className=" h-[30vh] w-full  object-cover"
        />
        <div className="p-6 w-full py-6 my-2">
          <div className="font-semibold text-left text-gray-800 text-xl mb-2">
            {title}
          </div>
          <div className="font-light text-left text-gray-600 text-md mb-2">
            🕐 More than {timing} hours
          </div>
          <p className="tetx-md text-gray-500 py-2">
            🤙 Live Weekly <span className="text-orange-500">Coaching</span>{" "}
            calls
          </p>
          <p className="tetx-md text-gray-500 ">
            ✅ 1 o 1 <span className="text-orange-500">Doubt Clearing</span>
          </p>
          <div className="flex items-center mt-4 text-left text-sm lg:text-xl text-gray-600 font-semibold">
            🤑 Starting at
            <span className="flex items-center text-orange-500">
              <BiRupee /> {pricing}/-
            </span>
            <span className="text-xs line-through flex items-center ml-3">
              <BiRupee /> {cutPrice}/-
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:hidden flex items-center text-xs rounded-full bg-orange-500 w-fit p-2 text-white mb-4">
            Read More <AiOutlineCaretRight />
          </div>
        </div>
        <div className="bg-orange-500 text-center  text-gray-100 font-bold rounded-b-sm">
          <p> {footerText}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
