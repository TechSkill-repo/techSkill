import React from "react";
import logo from "../assets/techlogo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function Base() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-black">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={logo} className="mr-3 h-8" alt="FlowBite Logo" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-gray-900 uppercase dark:text-white">
              Email:
            </h2>
            <p className="text-lg font-normal text-gray-900  dark:text-white">
              example@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold uppercase text-gray-800 dark:text-white">
              Phone.No:
            </h2>
            <p className="text-lg font-normal text-gray-900  dark:text-white">
              +91 0987171126
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-400 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-orange-400 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center items-center sm:mt-0">
          <a
            href="#"
            className="text-orange-400 hover:text-gray-900 dark:hover:text-white"
          >
            <BsFacebook className="lg:text-3xl text-xl" />
          </a>
          <a
            href="#"
            className="text-orange-400 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillInstagram className="lg:text-[2.4rem] text-2xl" />
          </a>
          <a
            href="#"
            className="text-orange-400 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillTwitterCircle className="lg:text-[2.3rem] text-2xl" />
          </a>
          <a
            href="#"
            className="text-orange-400 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillGithub className="lg:text-[2.3rem] text-2xl" />
          </a>
          <a
            href="#"
            className="text-orange-400 hover:text-gray-900 dark:hover:text-white"
          >
            <BsStackOverflow className="lg:text-[2rem] text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Base;
