import React from "react";
import UiUxCards from "./UiUxCards";
function UiUx() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <UiUxCards
          title="Sketch"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png"
          text="
          Sketch is the ultimate tool for iOS, Android and Web design."
        />
        <UiUxCards
          title="Adobe XD"
          img="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg"
          text="Adobe XD is the Adobe prototyping tool for user experience and interaction designers. Adobe XD features are used for creating wireframes, prototypes, and screen designs for digital products such as websites and mobile apps."
        />
        <UiUxCards
          title="Figma"
          img="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          text="
          Figma is dangerous because it gives designers access, not only in terms of reasonable pricing and cutting edge features, but in terms of practical execution. "
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <UiUxCards
          title="Miro"
          img="https://cdn.worldvectorlogo.com/logos/miro-2.svg"
          text="
          Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows."
        />
        <UiUxCards
          title="Wordpress"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
          text="WordPress is a content management system (CMS) that allows you to host and build websites. WordPress contains plugin architecture and a template system, so you can customize any website to fit your business, blog, Potfolio, or online store."
        />
        <UiUxCards
          title="PhotoShop"
          img="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png"
          text="Photoshop as a new photo editor, it's still one of the best photo editing software for beginners to learn. Adobe Photoshop is a layer-based editing program, which can take some time to get used to, but it's worth the effort."
        />
      </div>
    </>
  );
}

export default UiUx;
