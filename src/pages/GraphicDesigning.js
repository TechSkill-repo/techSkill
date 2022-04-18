import React from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import Footer from "../components/Footer";
import FullStackTimeShedule from "../components/FullStack/FullStackTimeShedule";
import GraphicDesigningCard from "../components/GraphicDesigning/GraphicDesigningCard";
import GraphicDesigningPriceCard from "../components/GraphicDesigning/GraphicDesigningPriceCard";

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
              <span className="text-orange-400">With Graphic Designing 💸</span>
            </h1>
            <div className="text-left space-y-3 mt-10">
              <p className="  text-gray-50 lg:p-0 p-2 lg:text-xl ">
                ✅ &nbsp; NO designing experience required
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; From learning the Basics of Graphic Designing to
                Mastering GraphicDesigning!
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; We teach exciting technologies such as Ai, Ps, Canva,
                Id, Pr + MORE
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; Weekly GraphicDesigning mastermind coaching calls
                providing dynamic content unlike any Udemy course!
              </p>
              <p className=" text-gray-50 lg:p-0 p-2 lg:text-xl ">
                {" "}
                ✅ &nbsp; &nbsp; Access to exclusive Slack & Discord
                communitiesproviding
              </p>
            </div>
            <Link
              to="/contact"
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-orange-500 lg:text-[18px] text-[12px] lg:mt-16 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-500 hover:scale-105 hover:text-black duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide mb-10 lg:mb-0">
                CLICK TO BOOK YOUR FIRST{" "}
                <span className="text-black">FREE</span> CLASS!{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-gray-200 p-10">
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
          <p>Learn the design to build projects like...</p>
          <div className="lg:flex grid grid-cols-1 justify-items-center gap-12 lg:items-center lg:justify-evenly p-20">
            <img
              className="w-auto lg:h-40 object-contain  hover:scale-110 transition-all cursor-pointer
               h-auto"
              src="https://images.examples.com/wp-content/uploads/2018/09/Black-and-White-Social-Media-Banner-Design-Example.jpg"
            />
            <img
              className="w-auto lg:h-40 object-contain  hover:scale-110 h-auto transition-all cursor-pointer"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137688157/original/f4543c8577404768e87d9b7dbbe8130f4808dc0f/design-social-media-posts-graphics-for-facebook-instagram.jpg"
            />
            <img
              className="w-auto lg:h-40 object-contain hover:scale-110 h-auto transition-all cursor-pointer"
              src="https://freedesignfile.com/upload/2020/01/Landscape-social-media-post-layouts-vector.jpg"
            />
            <img
              className="w-auto lg:h-40 object-contain hover:scale-110 h-auto transition-all cursor-pointer"
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/346/posts/28229/image/ban26.jpg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            GraphicDesigning 101
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            This course is designed to cover ALL elements of Designing,
            <br />
            <br />
            including Graphic Designing technologies & Everything in between!
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
            Every week, techPedia will deliver a Full Stack Mastermind coaching
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
            the techPedia fam, we take this to a WHOLE new level! - Dedicated
            support 24/7, accountability, motivation, its all here inside the
            techPedia fam community.
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
            This course is designed to cover ALL elements of Graphic Designing,
            <br />
            including Graphic Ai Designing technologies & Ps designing
            technology Everything in between!
          </p>
        </div>
        <div className="shadow-xl rounded p-10 text-center max-w-full h-full">
          <img
            className="h-24 m-auto"
            src="https://cdn.technobezz.com/files/uploads/2020/06/discord_main-1-1280x720-1.jpg"
          />
          <h1 className="text-center font-bold text-gray-700 text-3xl p-10">
            Discort community
          </h1>
          <p className="text-gray-500 leading-relaxed tracking-wider">
            Every week, techPedia will deliver a Full Stack Mastermind coaching
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
            Everything you need to go from ZERO to landing your first of many
            $$$'s We teach you how to take your skill & passion for programming
            and transform that into a sustainable income which will change your
            life.
          </p>
        </div>
      </div>
      <div className="w-[90%] bg-black m-auto p-10">
        <h1 className="font-extrabold text-center text-gray-50 text-4xl">
          What's Inside Zero to{" "}
          <span className="text-orange-500"> Graphic Designing </span> Hero!?
        </h1>
        <p className="text-center text-xl text-white font-light pt-5 leading-relaxed tracking-wider">
          Know <span className="font-extrabold underline">EXACTLY </span>what
          you are going to get before purchasing!
        </p>
      </div>
      <GraphicDesigningCard />
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
          💠 🔐 techPedia Mentorship Coaching Calls [Diamond Members Only]
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
          We did it, we have made the perfect tech cource eBooks which will be
          your Ultimate Cheatsheet that will guide you through the technology
          with ease. These eBooks contain everything you need to know to become
          a programming god...No exaggerations!
        </p>
      </div>
      <GraphicDesigningPriceCard />
      <Footer />
      <Base />
    </div>
  );
}

export default GraphicDesigning;
