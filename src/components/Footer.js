import React from "react";

function Footer() {
  return (
    <div className="w-full h-[80vh] mt-10 relative">
      <div className="absolute top-0 bg-gray-600 bg-opacity-70  left-0 w-full h-full">
        {" "}
      </div>
      <div className=' w-full h-full bg-[url("https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg")] bg-cover bg-center  '>
        <div className=" text-center pt-40 pb-7 relative z-40">
          <h1 className=" text-[40px] font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize ">
            Proven Courses & Real Results 😍
          </h1>
          <p className=" text-center px-40 py-6 text-[24px] font-semiboldbold text-gray-50 leading-relaxed tracking-wider">
            No certifications or awards here. We focus on giving you real
            <br />
            developer skills that bring you real results: Clients, jobs, self-
            <br />
            improvement and profit. Our students aren't just satisfied...
            <br />
            They've gotten real results as developers .👇
          </p>
        </div>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div class="md:flex">
            <div class="w-full p-3">
              <div class="relative">
                {" "}
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  class="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                  name=""
                />{" "}
                <button class="h-10 rounded bg-orange-500 absolute top-2 text-sm font-semiboldbold right-2 px-3 text-white hover:bg-gray-800 ">
                  Subscribe Now
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
