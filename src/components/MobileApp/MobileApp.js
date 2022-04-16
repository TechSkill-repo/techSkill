import React from "react";
import MobileDev from "./MobileDev";

function MobileApp() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <MobileDev
          title="HTML CSS JS"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/nq0ctyphSKFhZaWdo5lg_PbfSMbtzTQCQgFR1SMCJ_Web_dev_essentials.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <MobileDev
          title="CSS MASTERY"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/2YUeP48SRhE6fYhTyrmn_8Wzit3ygSOmmAaumgUwJ_CSS_Mastery.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <MobileDev
          title="REACT NATIVE 101"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/f6Qt8KO1SLih4Fj63w7u_DIFc2C0QeiDwUdfRMygI_React_Native_101.png"
          text="Building iOS & Android apps?
          We got you covered!"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <MobileDev
          title="JS MASTERY"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/HdBEOzJSn6X3OL8z90Uw_Javascript_Mastery.png"
          text="Master the programming language which redefined the web. From the fundamentals to the complicated parts, we got you covered!"
        />
        <MobileDev
          title="REACT NATIVATION"
          img="https://reactnavigation.org/img/spiro.svg"
          text="React Navigation is a standalone library that enables you to implement navigation functionality in a React Native application. React Navigation is written in JavaScript and does not directly use the native navigation APIs on iOS and Android. "
        />
        <MobileDev
          title="REDUX MANAGMENT"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/dW5iJNvT8SMYsXR6gmtg_BzWWXgLMTeyaPZSxpHAL_Redux_for_dummies.png"
          text="If there is one skill you NEED to land the frontend job, it's REDUX."
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <MobileDev
          title="FIREBASE "
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/KNInoYk3SCWa0U2DkkUG_B2pFP4bQ9yMmLsxVfcUg_The_Firebase_Guide.png"
          text="Think of the power of the Sun... Yep Firebase is THAT powerful and we are going to teach you how to not get burnt and succeed with it!"
        />
        <MobileDev
          title="FULL GITHub GUIDE"
          img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          text="Prepare for a career in tech by joining GitHub Global Campus. Global Campus will help you get the practical industry knowledge you need by giving you access to industry tools, events, learning resources and a growing student community."
        />
        <MobileDev
          title="REACT ELEMENT"
          img="https://reactnativeelements.com/img/website/logo.png"
          text="a component refers to a small part of a larger entity that mostly is a manufactured object. In contrast, an element is one the simplest parts of which anything consists of."
        />
      </div>
    </>
  );
}

export default MobileApp;
