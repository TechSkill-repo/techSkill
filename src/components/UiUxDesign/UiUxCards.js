import React from "react";

function UiUx({ img, text, title }) {
  return (
    <>
      <div className="shadow-xl rounded p-10 text-center max-w-full">
        <img className="h-20 m-auto object-contain" src={img} />
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

export default UiUx;
