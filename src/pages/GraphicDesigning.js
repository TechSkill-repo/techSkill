import React from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import Footer from "../components/Footer";
import FrontEndTimeShedule from "../components/FrontEnd/FrontEndTimeShedule";
import FullStackInfo from "../components/FullStack/FullStackInfo";
import FullStackPriceCard from "../components/FullStack/FullStackPriceCard";
import FullStackTimeShedule from "../components/FullStack/FullStackTimeShedule";

function GraphicDesigning() {
  return (
    <div className="w-full h-full  relative">
      <div className="w-full lg:h-screen h-full relative">
        <div className="absolute top-0 bg-black bg-opacity-70  left-0 w-full h-full">
          {" "}
        </div>
        <div className='w-full  h-full bg-[url("https://www.webbanao.com/images/graphics-design.jpg")] bg-cover bg-center  '>
          <div className="px-16   relative z-40">
            <h1 className="lg:text-6xl lg:pt-44 pt-32 font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize text-center lg:text-left text-3xl">
              Let's start designing
              <br />
              <span className="text-orange-400">The Graphic Designing 💸</span>
            </h1>
            <div className="text-center lg:text-left space-y-3 mt-10">
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
                Firebase, Typescript, Next.js, mongoDB + MORE
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; Weekly Full-Stack mastermind coaching calls providing
                dynamic content unlike any Udemy course!
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; Weekly Full-Stack mastermind coaching calls providing
              </p>
            </div>
            <Link
              to="/contact"
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-orange-500 lg:text-[18px] text-[12px] lg:mt-16 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-200 hover:text-black duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide mb-10 lg:mb-0">
                CLICK HERE TO BOOK YOUR FIRST{" "}
                <span className="text-black">FREE</span> CLASS!{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-gray-200 p-10">
        <div className="lg:flex grid grid-cols-3 justify-items-center gap-12 lg:items-center lg:justify-evenly">
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/788px-Adobe_InDesign_CC_icon.svg.png"
          />
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
          />
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png"
          />
          <img
            className="w-auto h-24 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1024px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549"
          />
          <img
            className="w-auto h-24 object-contain"
            src="https://pnggrid.com/wp-content/uploads/2021/05/Canva-app-logo-1024x1024.png"
          />
        </div>
      </div>
      <div className="mt-28">
        <div className="text-center text-gray-700 font-extrabold text-3xl">
          <p>Learn the Tech behind top companies like...</p>
          <div className="lg:flex grid grid-cols-3 justify-items-center gap-12 lg:items-center lg:justify-evenly p-20">
            <img
              className="w-auto lg:h-14
               h-auto"
              src="https://icon-library.com/images/facebook-svg-icon/facebook-svg-icon-29.jpg"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__480.png"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202204080353"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/931/524/TESLA-LOGO.jpg?ve=1&tl=1"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://play-lh.googleusercontent.com/8Vw-7MAm558750a4M55fiOlUf7lP2cYnFuqSWynrygIiyEEiQQDa_xxHKYOX83L0UD2T"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/Netflix_Logo_Digital_Video-800x450.jpg"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
            />
            <img
              className="w-auto lg:h-14 h-auto"
              src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
          <img
            className="h-24 m-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            MERN STACK 101
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            This course is designed to cover ALL elements of Web development,
            <br />
            <br />
            including Frontend technologies, Backend technologies & Everything
            in between!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
          <img
            className="h-24 m-auto"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/WquJvpFSGWxoQTfjf7uQ_tezjWY97Qe6ILAidkyjJ_icons8-leadership.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Weekly Coaching Calls
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Every week, Sonny will deliver a Full Stack Mastermind coaching
            <br />
            call which many describe as 'Worth more than a University Degree
            itself!', so buckle up!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
          <img
            className="h-24 m-auto"
            src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
          />
          <h1 className="text-center text-gray-700 font-bold text-3xl p-10">
            Slack Community
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Ever heard the saying "your network is your net worth", well... with
            the PAPA fam, we take this to a WHOLE new level! - Dedicated support
            24/7, accountability, motivation, its all here inside the PAPA fam
            community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
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
            including Frontend technologies, Backend technologies & Everything
            in between!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
          <img
            className="h-24 m-auto"
            src="https://cdn.technobezz.com/files/uploads/2020/06/discord_main-1-1280x720-1.jpg"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Discort community
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Every week, Sonny will deliver a Full Stack Mastermind coaching
            <br />
            call which many describe as 'Worth more than a University Degree
            itself!', so buckle up!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-fit">
          <img
            className="h-24 m-auto"
            src="https://www.seekpng.com/png/detail/7-79869_dollar-png-free-download-dollar-logo.png"
          />
          <h1 className="text-center text-gray-700 font-bold text-3xl p-10">
            Earn after learn
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Ever heard the saying "your network is your net worth", well... with
            the PAPA fam, we take this to a WHOLE new level! - Dedicated support
            24/7, accountability, motivation, its all here inside the PAPA fam
            community.
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
      <FullStackInfo />
      <FullStackTimeShedule
        week="1"
        timing="4 Hours 48 Minutes"
        text="Intro to Wednesday Meetings - Productivity Hacks - Book Recommendations - VS Code Extensions - Props & State - Class and Functional Components"
      />
      <FullStackTimeShedule
        week="2"
        timing="3 Hours 48 Minutes"
        text="Intro to Wednesday Meetings - Productivity Hacks - Book Recommendations - VS Code Extensions - Props & State - Class and Functional Components"
      />
      <FullStackTimeShedule
        week="3"
        timing="5 Hours 48 Minutes"
        text="Intro to Wednesday Meetings - Productivity Hacks - Book Recommendations - VS Code Extensions - Props & State - Class and Functional Components"
      />
      <div className="max-w-[70%] m-auto shadow-lg rounded-lg p-5">
        <h1 className="lg:text-xl font-bold p-2">
          + 42 Weeks More! With total of 60 hour of video study!
        </h1>
      </div>
      <div className="max-w-[85%] m-auto shadow-lg my-20 p-5">
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
          💠 🔐 PAPA Mentorship Coaching Calls [Diamond Members Only]
        </h1>
      </div>
      <div className="max-w-[85%] m-auto shadow-xl my-20 p-5">
        <h1 className="lg:text-4xl text-2xl text-center font-bold p-2">
          <span className=" text-orange-400 p-2 ">
            And we still aren't done yet....
          </span>{" "}
          There's MORE!?
        </h1>
        <p className="text-gray-500 p-5 lg:text-xl max-w-[80%] leading-tight rounded-lg tracking-wide m-auto text-center">
          We did it, we have made the perfect JavaScript and Next.js eBooks
          which will be your Ultimate Cheatsheet that will guide you through
          JavaScript and Next.js with ease. These eBooks contain everything you
          need to know to become a programming god...No exaggerations!
        </p>
      </div>
      <FullStackPriceCard />
      <Footer />
      <Base />
    </div>
  );
}

export default GraphicDesigning;
