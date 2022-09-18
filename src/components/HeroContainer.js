import React from "react";
import img from "../assets/img.png";
import angular from "../assets/angular.png";
import aws from "../assets/aws.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import ruby from "../assets/ruby.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import { AiFillCaretRight } from "react-icons/ai";

function HeroContainer() {
  return (
    <>
      <div className="w-100 h-fit">
        <p className="text-center pt-14 text-base font-bold text-orange-600 tra">
          THE TECHNOLOGY SKILLS PLATFORM
        </p>
        <h1 className="text-center pt-10 text-4xl font-bold text-black tra border-b-2 pb-5 border-orange-600 w-1/2 m-auto">
          Empower employees to build their skills
        </h1>
        <div className="flex flex-wrap justify-between p-16">
          <div>
            <h1 className="text-3xl tracking-wide font-bold text-gray-900">
              Feel confident your team is learning from <br /> the industry’s
              best !
            </h1>
            <p className=" pt-6 text-lg text-gray-600 font-medium">
              Upskill your team with courses on the most in-demand technology{" "}
              <br />
              topics, taught by the experts who know them best.
            </p>
            <div className="flex pt-10 flex-wrap justify-between mr-32 w-auto">
              <div className="text-base font-medium">
                <p className="p-1">✔️ Full Stack Development</p>
                <p className="p-1">✔️ Frontend Mastery</p>
                <p className="p-1">✔️ Python Backend </p>
              </div>
              <div className="text-base font-medium">
                <p className="p-1">✔️ Software Development</p>
                <p className="p-1">✔️ Software Development</p>
                <p className="p-1">✔️ Software Development</p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_copy/column-parsys-1/generic_block_copy_c/parsys/image/image-res.img.344032d8-90ae-46d8-875d-ca8374e4c28b.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between p-16">
        <div className="w-1/3">
          <img src={img} />
        </div>
        <div>
          <h1 className="text-5xl pl-48 tracking-wide font-bold text-gray-900">
            Why Pluralsight?
          </h1>

          <div className="flex pt-10 pl-48 flex-wrap justify-between mr-32 w-auto">
            <div className="text-base  font-medium">
              <p className=" pt-2 text-lg text-gray-600 font-medium">
                Whether you’re an individual looking to learn Python to advance
                <br />
                your career or an enterprise team looking to cut cycle times,
                <br />
                speed up onboarding, or give your teams the skills to realize
                <br />
                your strategies, we remove the challenges and roadblocks slowing
                <br />
                you down. We’re advancing the world’s tech workforce, and that
                <br />
                starts with making your work more efficient and effective—and
                <br />
                giving you more to celebrate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center pt-10 text-3xl font-bold text-gray-500 tra border-b-2 pb-5  w-1/2 m-auto">
          Popular Pluralsight Skills topics to learn now
        </h1>
        <div className="flex flex-wrap text-center justify-around align-center p-20">
          <img src={angular} />
          <img src={c} />
          <img src={react} />
          <img src={js} />
          <img src={aws} />
          <img src={python} />
          <img src={ruby} />
          <img src={java} />
        </div>
      </div>
      <h1 className="flex cursor-pointer justify-center align-center text-center pt-2 text-lg font-bold text-orange-500 ">
        <span> View All our top trending courses </span>
        <span className="p-1.5">
          <AiFillCaretRight />
        </span>
      </h1>
    </>
  );
}

export default HeroContainer;
