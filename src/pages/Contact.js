import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import Base from "../components/Base";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [coursePlan, setCoursePlan] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "joinNow", uuidv4()), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      scope: scope,
      coursePlan: coursePlan,
      phoneNo: phoneNo,
      state: state,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setScope("");
    setCoursePlan("");
    setPhoneNo("");
    setState("");
    window.alert("Press OK to submit 👍");
  };

  return (
    <>
      <div className="m-10 h-[40vh]">
        <div className="absolute top-[0vh] bg-gray-600 bg-opacity-80  left-0 w-full h-[45vh]">
          {" "}
        </div>
        <div className=' w-full h-[40vh] bg-[url("https://www.freecodecamp.org/news/content/images/2019/08/meetup-talk.jpg")]'>
          <div className="px-16 top-1/2 -translate-y-1/2 relative z-40">
            <h1 className="lg:text-5xl text-xl font-sans text-gray-50 font-extrabold leading-tight text-center tracking-wide capitalize ">
              📍Find meetups near your location 👇
            </h1>
          </div>
        </div>
      </div>
      <div
        className="flex-col justify-center p-10 shadow-2xl w-fit m-auto mb-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl pb-10 font-bold text-gray-900">
          😎 Fill the form and get a call
        </h1>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="exaplme@gamil.com"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                School / Collage Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Public School"
                name="scope"
                value={scope}
                onChange={(e) => {
                  setScope(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                course Plan
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="coursePlan"
                  value={coursePlan}
                  onChange={(e) => {
                    setCoursePlan(e.target.value);
                  }}
                >
                  <option>Website Devlopment</option>
                  <option>Mobile App Development</option>
                  <option>Full Stack Development</option>
                  <option>Python Development</option>
                  <option>Ui/Ux Designing</option>
                  <option>Graphic Designing</option>
                  <option>Ethical Hacking</option>
                  <option>Digital Marketting</option>
                  <option>Microsoft Office</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="0987654312"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Kolkata"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            disabled={!email}
            type="submit"
            className="text-white w-full bg-gradient-to-br from-gray-900 to-gray-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-orange-800 font-medium rounded-lg text-base px-5 py-3 cursor-pointer text-center mr-2 mb-2 mt-10 "
          >
            Submit
          </button>
        </form>
      </div>
      <Base />
    </>
  );
}

export default Contact;
