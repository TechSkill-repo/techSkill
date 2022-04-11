import React from "react";

function PythonTimeShedule({ week, timing, text }) {
  return (
    <div className="my-10">
      <div className="max-w-[70%] m-auto">
        <h1 className="text-4xl font-bold p-3">
          <span className="text-orange-400">Week</span> {week}
        </h1>
        <h1 className="text-2xl font-semibold py-2">🕜 {timing}</h1>
        <hr />
        <p className="py-2 text-gray-700 text-lg">❗ {text}</p>
      </div>
    </div>
  );
}

export default PythonTimeShedule;
