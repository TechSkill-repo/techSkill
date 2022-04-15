import React from "react";

function FullStackCard({ title, img, text }) {
  return (
    <>
      <div className="shadow-xl rounded p-10 text-center max-w-full">
        <img className="h-40 m-auto object-contain" src={img} />
        <h1 className="text-center font-bold text-gray-700 text-3xl p-5">
          {title}
        </h1>
        <p className="text-gray-500 py-5  leading-relaxed tracking-wider">
          {text}
        </p>
      </div>
    </>
  );
}

export default FullStackCard;
