import React from "react";
import FullStackCard from "./FullStackCards";

function FullStackInfo() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FullStackCard
          title="MongoDB"
          img="https://www.svgrepo.com/show/331488/mongodb.svg"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <FullStackCard
          title="Express JS"
          img="https://iconape.com/wp-content/files/ep/370863/svg/370863.svg"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <FullStackCard
          title="Express JS"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/STNeYetXSzSUhHCa5i8R_fyVYZOswRfSO7NZSTTtz_Complete_React_Guide.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FullStackCard
          title="Node JS"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <FullStackCard
          title="MERN"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/cyTTPQ7eTTe3q8nEG7zF_Yha3h0w3Rb6CvsXd306Q_MERN_Stack.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <FullStackCard
          title="Type Script"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/UzyhEteQyS03wCEObGKz_U5h72W3KRRaAb2vExB27_Typescript.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
      </div>
    </>
  );
}

export default FullStackInfo;
