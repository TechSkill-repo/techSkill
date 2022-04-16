import React from "react";
import FullStackCard from "./FullStackCards";

function FullStackInfo() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FullStackCard
          title="MongoDB"
          img="https://www.svgrepo.com/show/331488/mongodb.svg"
          text="Using MongoDB can provide many benefits to a software development team. Its flexible schema makes it easy to evolve and store data in a way that is easy for programmers to work with. "
        />
        <FullStackCard
          title="Express JS"
          img="https://iconape.com/wp-content/files/ep/370863/svg/370863.svg"
          text=" Express. js is a free and open-source web application framework for Node. js. It is used for designing and building web applications quickly and easily."
        />
        <FullStackCard
          title="React JS"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/STNeYetXSzSUhHCa5i8R_fyVYZOswRfSO7NZSTTtz_Complete_React_Guide.png"
          text="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components."
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FullStackCard
          title="Node JS"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
          text="
          Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind."
        />
        <FullStackCard
          title="MERN"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/cyTTPQ7eTTe3q8nEG7zF_Yha3h0w3Rb6CvsXd306Q_MERN_Stack.png"
          text="
          Image result for mern stack
          MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB - document database. Express(.js) - Node.js web framework. React(.js) - a client-side JavaScript framework."
        />
        <FullStackCard
          title="Type Script"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/UzyhEteQyS03wCEObGKz_U5h72W3KRRaAb2vExB27_Typescript.png"
          text="
          TypeScript simplifies JavaScript code, making it easier to read and debug. TypeScript is open source. TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking. "
        />
      </div>
    </>
  );
}

export default FullStackInfo;
