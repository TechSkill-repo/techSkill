import React from "react";

function Frontend() {
  return (
    <div className="w-full h-[110vh]  relative">
      <div className="absolute top-0 bg-gray-600 bg-opacity-80  left-0 w-full h-full">
        {" "}
      </div>
      <div className=' w-full h-full bg-[url("https://blog.logrocket.com/wp-content/uploads/2020/05/NGX_admin.png")]'>
        <div className="px-16 top-1/2 -translate-y-1/2 relative z-40">
          {/* <p className="text-xl font-mono mb-4 text-gray-50 font-extrabold leading-tight tracking-wide ">
            Learn the technology and Earn the monry 💸.
          </p> */}
          <h1 className="text-6xl font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize ">
            FrontEnd Devlopment <br />
            from <span className="text-orange-500">Zero to Hero! 🔥 </span>
          </h1>
          <div className="space-y-3 mt-8 max-w-2xl">
            <p className="  text-gray-50 text-xl ">
              ✅ &nbsp; NO CODING experience required
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              ✅ &nbsp; From learning the Basics of Web Development to Mastering
              React!
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              ✅ &nbsp; We teach exciting technologies such as Redux, Firebase,
              Typescript, Next.js, mongoDB + MORE
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              ✅ &nbsp; Weekly Full-Stack mastermind coaching calls providing
              dynamic content unlike any Udemy course!
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              ✅ &nbsp; Weekly Full-Stack mastermind coaching calls providing
              dynamic content unlike any Udemy course!
            </p>
            <p className=" text-gray-50 text-xl ">
              {" "}
              ✅ &nbsp; Weekly Full-Stack mastermind coaching calls providing
              dynamic content unlike any Udemy course!
            </p>
          </div>
          <button className="bg-orange-500 text-[18px] mt-20 font-extrabold px-6 py-4 shadow text-center rounded-md hover:bg-orange-200 hover:text-black duration-100 hover:transition-all hover:ease-in-out cursor-pointer text-gray-100 leading-tight tracking-wide">
            CLICK HERE TO JOIN THE TECHPEDIA !{" "}
          </button>
        </div>
      </div>
      <div className="h-[20vh] w-full bg-gray-200 p-10">
        <div className="flex items-center justify-evenly">
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://miro.medium.com/max/1400/1*RdowFHAWDgkkwjXkQW0yNQ.png"
          />
          <img className="w-auto h-24" src="https://mui.com/static/logo.png" />
        </div>
      </div>
      <div className="h-[20vh] w-full bg-gray-200 p-10">
        <div className="flex items-center justify-evenly">
          <img
            className="w-auto h-24"
            src="https://miro.medium.com/max/712/0*QXkyD4rFK7ivYf9-.png"
          />
          <img
            className="w-auto h-24"
            src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
          />
          <img
            className="w-auto h-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          />
        </div>
      </div>
      <div className="mt-28">
        <div className="text-center text-gray-700 font-extrabold text-3xl">
          <p>Learn the Tech behind top companies like...</p>
          <div className="flex items-center justify-evenly p-20">
            <img
              className="w-auto h-24"
              src="https://icon-library.com/images/facebook-svg-icon/facebook-svg-icon-29.jpg"
            />
            <img
              className="w-auto h-24"
              src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__480.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
