import React from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import Footer from "../components/Footer";
import FrontEndTimeShedule from "../components/FrontEnd/FrontEndTimeShedule";
import FrountEndPriceCard from "../components/FrontEnd/FrountEndPriceCard";
import FrontendAraayProps from "../schemas/FrontendAraayProps";
import amazon from "../assets/frontend/amazon.png";
import apple from "../assets/frontend/apple.png";
import css from "../assets/frontend/css.png";
import facebook from "../assets/frontend/facebook.png";
import fb from "../assets/frontend/fb.png";
import git from "../assets/frontend/git.png";
import google from "../assets/frontend/google.png";
import html from "../assets/frontend/html.png";
import js from "../assets/frontend/js.png";
import mui from "../assets/frontend/mui.png";
import netflix from "../assets/frontend/netflix.jpeg";
import npm from "../assets/frontend/npm.png";
import react from "../assets/frontend/react.png";
import redit from "../assets/frontend/redit.png";
import redux from "../assets/frontend/redux.png";
import telegram from "../assets/frontend/telegram.png";
import tesla from "../assets/frontend/tesla.webp";
import tw from "../assets/frontend/tw.png";
import vs from "../assets/frontend/vs.png";
import zomato from "../assets/frontend/zomato.png";

function Frontend() {
  return (
    <div className="w-full h-full  relative">
      <div className="w-full lg:h-screen h-full relative">
        <div className="absolute top-0 bg-black bg-opacity-70  left-0 w-full h-full">
          {" "}
        </div>
        <div className='w-full  h-full bg-[url("https://blog.logrocket.com/wp-content/uploads/2020/05/NGX_admin.png")] bg-cover bg-center  '>
          <div className="px-16   relative z-40">
            <h1 className="lg:text-6xl lg:pt-44 pt-32 font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize text-center lg:text-left text-3xl">
              Zero to WebDev Hero
              <br />
              <span className="text-orange-400">
                Website Devlopment Mastry🔥
              </span>
            </h1>
            <div className="text-left space-y-3 mt-10">
              <p className="  text-gray-50 lg:p-0 p-2 lg:text-xl ">
                ✅ &nbsp; NO CODING experience required
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; From learning the Basics of Web Development to
                Mastering React!
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; We teach exciting technologies such as Redux,
                Firebase, React, MaterialUi, Tailwind + MORE
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; Weekly frontend mastermind coaching calls providing
                dynamic content unlike any Udemy course!
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp;Access to exclusive Slack & Discord communities
              </p>
            </div>
            <Link
              to="/contact"
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-orange-500 lg:text-[18px] text-[12px] lg:mt-16 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-500 hover:scale-105 hover:text-black duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide mb-10 lg:mb-0">
                CLICK HERE TO BOOK YOUR FIRST{" "}
                <span className="text-black">FREE</span> CLASS!{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full  w-full bg-gray-200 p-10">
        <div className="lg:flex grid grid-cols-3 justify-items-center gap-12 lg:items-center lg:justify-evenly">
          <img className="w-auto h-24 object-contain" src={html} />
          <img className="w-auto h-24 object-contain" src={css} />
          <img className="w-auto h-24 object-contain" src={js} />
          <img className="w-auto h-24 object-contain" src={mui} />
          <img className="w-auto h-24 object-contain" src={react} />
          <img className="w-auto h-24 object-contain" src={fb} />
        </div>
      </div>
      <div className="h-full w-full bg-gray-200 p-10">
        <div className="lg:flex grid grid-cols-3 justify-items-center gap-12 lg:items-center lg:justify-evenly">
          <img className="w-auto h-24 object-contain" src={tw} />
          <img className="w-auto h-24 object-contain" src={redux} />
          <img className="w-auto h-24 object-contain" src={npm} />
          <img className="w-auto h-24 object-contain" src={git} />
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          />
          <img className="w-auto h-24 object-contain" src={vs} />
        </div>
      </div>
      <div className="mt-28">
        <div className="text-center text-gray-700 font-extrabold text-3xl">
          <p>Learn to build clones of top companies like...</p>
          <div className="lg:flex grid grid-cols-3 justify-items-center gap-12 lg:items-center lg:justify-evenly p-20">
            <img className="w-auto lg:h-16 h-auto" src={facebook} />
            <img className="w-auto h-16 object-contain" src={zomato} />
            <img className="w-auto h-16 object-contain" src={apple} />
            <img className="w-auto h-16 object-contain" src={tesla} />
            <img className="w-auto h-16 object-contain" src={redit} />
            <img className="w-auto h-16 object-contain" src={netflix} />
            <img className="w-auto h-16 object-contain" src={google} />
            <img className="w-auto h-16 object-contain" src={amazon} />
            <img className="w-auto h-16 object-contain" src={telegram} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://cdn.coderons.com/general/tags/javascript.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            FrontEnd Training
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            This course is designed to cover ALL elements of Web development,
            <br />
            <br />
            including Frontend technologies, disigning technologies & Everything
            in between!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/WquJvpFSGWxoQTfjf7uQ_tezjWY97Qe6ILAidkyjJ_icons8-leadership.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Weekly Coaching Calls
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Every week, tech will deliver a web dev Mastermind coaching
            <br />
            call which many describe as 'Worth more than a University Degree
            itself!', so buckle up!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
          />
          <h1 className="text-center text-gray-700 font-bold text-3xl p-10">
            Slack Community
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Ever heard the saying "your network is your net worth", well... with
            the techpedia fam, we take this to a WHOLE new level! - Dedicated
            support 24/7, accountability, motivation, its all here inside the
            techpedia fam community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/0oBZSc5RLCZvSL6re7ww_emoji-icon-glossy-06-01-activities-award-medal-military-medal-72dpi-forPersonalUseOnly.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Valid Certification
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            This course is designed to cover ALL elements of Web development,
            <br />
            including Frontend technologies, designing technologies & Everything
            in between!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://cdn.technobezz.com/files/uploads/2020/06/discord_main-1-1280x720-1.jpg"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Discort Group
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Every week, techpedia will deliver a frontend Mastermind coaching
            <br />
            call which many describe as 'Worth more than a University Degree
            itself!', so buckle up!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/jgr7hIsOTqmftTmuj39S_41uNySGSRSmmduJHzCGX_icons8-get_cash.png"
          />
          <h1 className="text-center text-gray-700 font-bold text-3xl p-10">
            Earn after learn
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Ever heard the saying "your network is your net worth", well... with
            the techpedia fam, we take this to a WHOLE new level! - Dedicated
            support 24/7, accountability, motivation in this community.
          </p>
        </div>
      </div>
      <div className="w-[90%] bg-black m-auto p-10">
        <h1 className="font-extrabold text-center text-gray-50 text-4xl">
          What's Inside Zero to{" "}
          <span className="text-orange-500"> FrontEnd </span> Hero!?
        </h1>
        <p className="text-center text-xl text-white font-light pt-5 leading-relaxed tracking-wider">
          Know <span className="font-extrabold underline">EXACTLY </span>what
          you are going to get before purchasing!
        </p>
      </div>
      <FrontendAraayProps />
      <FrontEndTimeShedule
        week="1"
        timing="4 Hours 48 Minutes"
        text="Intro to Wednesday Meetings -  Hacks & tools - website Recommendations - VS Code Extensions - html basic - Css and JS introduction with roadmap.."
      />
      <FrontEndTimeShedule
        week="2"
        timing="4 Hours 48 Minutes"
        text="Intro to Saturday Meetings - HTML in dept - Css designing - Js intro -  "
      />
      <FrontEndTimeShedule
        week="3"
        timing="4 Hours 48 Minutes"
        text="Intro to Saturday Meetings - Productivity Hacks - Book Recommendations - Props & State - Class and Functional Components"
      />
      <div className="max-w-[70%] m-auto shadow-lg rounded-lg p-5">
        <h1 className="lg:text-xl text-sm font-bold p-2">
          +16 Week More! With total of 60 hour of video study!
        </h1>
      </div>
      <div className="max-w-[85%] m-auto shadow-2xl my-20 p-5">
        <h1 className="lg:text-4xl text-2xl text-center font-bold p-2">
          <span className=" text-orange-400 p-2 "> But wait...</span> There's
          MORE!?
        </h1>
        <p className="text-gray-500 p-5 lg:text-xl max-w-[70%] leading-tight tracking-wide m-auto text-center">
          YES, We're always pushing the boundaries of the community and we don't
          plan on slowing down any time soon.. Check this out!
        </p>
      </div>

      <div className="max-w-[60%] m-auto shadow-md mb-10 p-5">
        <h1 className="lg:text-xl font-bold px-3 py-4">
          🔴🏅 Success Coach Coaching Calls [Every Friday]
        </h1>
      </div>
      <div className="max-w-[60%] m-auto mb-10 shadow-md p-5">
        <h1 className="lg:text-xl font-bold px-3 py-4">
          👩‍🎓👨‍🎓 The Student Area [Lessons & Resources + More]
        </h1>
      </div>
      <div className="max-w-[60%] m-auto shadow-md p-5">
        <h1 className="lg:text-xl font-bold px-3 py-4">
          💠 🔐 techPedia Mentorship Coaching Calls [Diamond Members Only]
        </h1>
      </div>
      <div className="max-w-[85%] m-auto shadow-[0px_25px_20px_20px_rgba(0,0,0,0.1)] my-20 p-5">
        <h1 className="lg:text-4xl text-2xl text-center font-bold p-2">
          <span className=" text-orange-400 p-2 ">
            And we still aren't done yet....
          </span>{" "}
          There's MORE!?
        </h1>
        <p className="text-gray-500 p-5 text-xl max-w-[80%] leading-tight rounded-lg tracking-wide m-auto text-center">
          We did it, we have made the perfect JavaScript and React.js eBooks
          which will be your Ultimate Cheatsheet that will guide you through
          JavaScript and React.js with ease. These eBooks contain everything you
          need to know to become a programming god...No exaggerations!
        </p>
      </div>
      <FrountEndPriceCard />
      <Footer />
      <Base />
    </div>
  );
}

export default Frontend;
