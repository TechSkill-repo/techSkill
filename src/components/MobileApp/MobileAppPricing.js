import React from "react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function MobileAppPricing() {
  return (
    <div className="">
      <h1 className="text-center lg:text-5xl text-3xl my-10 font-bold  ">
        Pay a little, <span className="text-orange-500">Earn a lot! 💸</span>
      </h1>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-6 lg:gap-12 w-full p-10 ">
        <div className="h-fit shadow-xl lg:w-[80%] max-w-full hover:shadow-2xl hover:cursor-pointer">
          <div className="bg-sky-600  w-full text-center">
            <h1 className="text-4xl font-bold text-gray-50 py-6">
              🔥 Tech Silver 🔥
            </h1>
          </div>
          <div className="">
            <h1 className="text-sky-600 text-3xl font-bold text-center mt-5">
              Top Seller
            </h1>
            <h1 className="flex items-center justify-center lg:text-4xl text-2xl pt-8 font-bold text-gray-800 ">
              <BiRupee />
              7590 (<BiRupee />
              1520/month)
            </h1>
            <p className="text-lg font-bold text-gray-400 text-center py-4">
              ONE-TIME PAYMENT (SAVE 20%)
            </p>
            <div className="border-solid border-b-2 w-[80%] m-auto border-gray-300"></div>
          </div>
          <div className="flex-col justify-center items-center pl-10 py-10 w-[93%]">
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Duration of techPedia silver pack{" "}
              <b className="text-gray-700"> 5 monts Access.</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              👊CSS Disigning 👊JavaScript 👊ReactNative <br />
              👊npm 👊Github 👊ReactNavigation
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Access to the techPedia{" "}
              <b className="text-gray-700"> GITHUB REPO (Worth Rs990)</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Access to Fruntend Mastermind Coaching |
              <b className="text-gray-700">
                {" "}
                80+ Hours of content (Worth Rs5000+)
              </b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ LIFETIME ACCESS to Zero to Native{" "}
              <b className="text-gray-700">Hero Modules</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ 4 Static Minor Projects
              <b className="text-gray-700"> (weekly with Sonny)</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Weekly 4 hours coaching Zoom calls
              <b className="text-gray-700"> +2 hours doubt clearing section </b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️Access Anywhere, Anytime on the Web or through the ZOOM App
              <b className="text-gray-700"> (iOS & Android) </b>
            </p>
          </div>
          <div className="border-solid border-b-2 w-[80%] m-auto border-gray-300"></div>
          <p className="text-center text-lg p-5 lg:text-xl text-sky-600 lg:pt-10">
            Split into 3 Monthly Payments of £150
          </p>
          <div className="flex justify-center p-10">
            <Link to="/contact" className=" bg-black   w-full text-center ">
              <button className="lg:text-xl text-lg bg-black text-white py-4 w-full text-center rounded-lg">
                Join Now and Save Up to 20%{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden flex-col justify-center items-center">
          <h1 className="text-center my-5 text-4xl font-extrabold">OR</h1>
          <h1 className="text-center text-base font-bold">
            Upgrade to our Exclusive <br /> Mentorship Experience <br /> 👉
          </h1>
        </div>
        <div className="h-fit shadow-xl lg:w-[80%] max-w-full scale-[1.02] hover:shadow-2xl mt-10   hover:cursor-pointer">
          <div className="bg-purple-500  w-full text-center">
            <h1 className="text-4xl font-bold text-gray-50 py-6">
              🔥 Tech Platinum 🔥
            </h1>
          </div>
          <div className="">
            <h1 className="text-sky-600 text-3xl font-bold text-center mt-5">
              Best Plan
            </h1>
            <h1 className="flex items-center justify-center lg:text-4xl text-2xl pt-8 font-bold text-gray-800 ">
              <BiRupee />
              15990 (<BiRupee />
              1599/month!)
            </h1>
            <p className="text-lg font-bold text-gray-400 text-center py-4">
              ONE-TIME PAYMENT (SAVE 20%)
            </p>
            <div className="border-solid border-b-2 w-[80%] m-auto border-gray-300"></div>
          </div>
          <div className="flex-col justify-center items-center pl-10 py-10 w-[93%]">
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Duration of techPedia silver pack{" "}
              <b className="text-gray-700"> 10 monts Access.</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              👊CSS 👊JavaScript 👊ReactNative 👊Firebase
              <br />
              👊npm 👊Git 👊Github 👊ReactNavigation
              <br /> <b className="ml-[50%] text-2xl">+</b>
              <p className="text-lg font-semibold text-gray-500 py-3">
                👊React 👊Redux 👊ReactElement 👊npm
                <br />
              </p>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Access to the techPedia{" "}
              <b className="text-gray-700"> GITHUB REPO (Worth Rs990)</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Access to Fruntend Mastermind Coaching |
              <b className="text-gray-700">
                {" "}
                160+ Hours of content (Worth Rs 12000)
              </b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ LIFETIME ACCESS to Zero to Fruntend{" "}
              <b className="text-gray-700">Hero Modules</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ 15 Minor and Major Projects
              <b className="text-gray-700"> in your github potfolio.</b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️ Weekly 4 hours coaching Zoom calls
              <b className="text-gray-700"> +2 hours doubt clearing section </b>
            </p>
            <p className="text-lg font-semibold text-gray-500 py-3">
              ⭐️Access Anywhere, Anytime on the Web or through the ZOOM App
              <b className="text-gray-700"> (iOS & Android) </b>
            </p>
          </div>
          <div className="border-solid border-b-2 w-[80%] m-auto border-gray-300"></div>
          <p className="text-center text-lg p-5 lg:text-xl text-sky-600 lg:pt-10">
            Split into 3 Monthly Payments of £150
          </p>
          <div className="flex justify-center p-10">
            <Link to="/contact" className=" bg-black   w-full text-center ">
              <button className="lg:text-xl text-lg bg-black text-white py-4 w-full text-center rounded-lg">
                Join Now and Save Up to 20%{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppPricing;
