import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "subscribers", uuidv4()), {
      email: email,
    });
    setEmail("");
  };

  return (
    <div className="w-full h-[80vh] mt-10 relative">
      <div className="absolute top-0 bg-black bg-opacity-70  left-0 w-full h-full">
        {" "}
      </div>
      <div className=' w-full h-full bg-[url("https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg")] bg-cover bg-center  '>
        <div className=" text-center pt-20 lg:pt-40 pb-7 relative z-40">
          <h1 className=" text-[40px] font-sans text-gray-50 font-extrabold leading-tight tracking-wide capitalize ">
            Proven Courses & Real Results 😍
          </h1>
          <p className=" text-center px-10 lg:px-40 py-6 lg:text-[24px] text-xl font-semiboldbold text-gray-50 leading-relaxed tracking-wider">
            No certifications or awards here. We focus on giving you real
            <br />
            developer skills that bring you real results: Clients, jobs, self-
            <br />
            improvement and profit. Our students aren't just satisfied...
            <br />
            They've gotten real results as developers .👇
          </p>
        </div>
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <form className="relative" onSubmit={handleSubmit}>
                {" "}
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <button className="h-10 rounded bg-orange-500 absolute top-2 text-sm font-semiboldbold right-2 px-3 text-white hover:bg-gray-800 ">
                  Subscribe Now
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
