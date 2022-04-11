import React from "react";
import PythonCard from "./PythonCard";

function PythonCardInfo() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <PythonCard
          title="Python Basic"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <PythonCard
          title="Github"
          img="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <PythonCard
          title="Django"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1280px-Django_logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <PythonCard
          title="Tenser Flow"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <PythonCard
          title="Loops"
          img="https://image.shutterstock.com/image-vector/loop-logo-vector-ribbon-lettering-260nw-1425991553.jpg"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <PythonCard
          title="Pycharm IDE"
          img="https://storage.caktusgroup.com/media/blog-images/logo.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
      </div>
    </>
  );
}

export default PythonCardInfo;
