import React from "react";
import UiUxCards from "./UiUxCards";
function UiUx() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <UiUxCards
          title="Python Basic"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <UiUxCards
          title="Github"
          img="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <UiUxCards
          title="Django"
          img="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <UiUxCards
          title="Tenser Flow"
          img="https://cdn.worldvectorlogo.com/logos/miro-2.svg"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <UiUxCards
          title="Loops"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
        <UiUxCards
          title="Pycharm IDE"
          img="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
    cover HTML, CSS, Javascript and a ton of extra's that will propel
    you into the world of web development!"
        />
      </div>
    </>
  );
}

export default UiUx;
