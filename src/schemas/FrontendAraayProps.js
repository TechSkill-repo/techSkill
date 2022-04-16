import React from "react";
import FrontEndTechCards from "../components/FrontEnd/FrontEndTechCards";

function FrontendAraayProps() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FrontEndTechCards
          title="HTML CSS JS"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/nq0ctyphSKFhZaWdo5lg_PbfSMbtzTQCQgFR1SMCJ_Web_dev_essentials.png"
          text="If you're starting from absolute ZERO, we got you! We are going to
        cover HTML, CSS, Javascript and a ton of extra's that will propel
        you into the world of web development!"
        />
        <FrontEndTechCards
          title="CSS MASTERY"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/2YUeP48SRhE6fYhTyrmn_8Wzit3ygSOmmAaumgUwJ_CSS_Mastery.png"
          text="Flexbox, CSS Grid, Bootstrap, Material-UI + SO MUCH MORE to make your website a looker and the next big hit!"
        />
        <FrontEndTechCards
          title="REACT MASTERY"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/JtVkDltZTK2mluaMg8sq_iyk1c1EnRCigcLHXSNZq_React-basics.png"
          text="EVERYTHING in React. We got you covered."
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FrontEndTechCards
          title="JS MASTERY"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/HdBEOzJSn6X3OL8z90Uw_Javascript_Mastery.png"
          text="Master the programming language which redefined the web. From the fundamentals to the complicated parts, we got you covered!"
        />
        <FrontEndTechCards
          title="REACT COMPLETE GUIDE"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/STNeYetXSzSUhHCa5i8R_fyVYZOswRfSO7NZSTTtz_Complete_React_Guide.png"
          text="It's what you all have been asking for!"
        />
        <FrontEndTechCards
          title="REDUX MANAGMENT"
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/dW5iJNvT8SMYsXR6gmtg_BzWWXgLMTeyaPZSxpHAL_Redux_for_dummies.png"
          text="If there is one skill you NEED to land the frontend job, it's REDUX."
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <FrontEndTechCards
          title="FIREBASE "
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/KNInoYk3SCWa0U2DkkUG_B2pFP4bQ9yMmLsxVfcUg_The_Firebase_Guide.png"
          text="Think of the power of the Sun... Yep Firebase is THAT powerful and we are going to teach you how to not get burnt and succeed with it!"
        />
        <FrontEndTechCards
          title="FULL GITHub GUIDE"
          img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          text="Prepare for a career in tech by joining GitHub Global Campus. Global Campus will help you get the practical industry knowledge you need by giving you access to industry tools, events, learning resources and a growing student community."
        />
        <FrontEndTechCards
          title="MATERIAL UI"
          img="https://mui.com/static/logo.png"
          text="MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
          "
        />
      </div>
    </div>
  );
}

export default FrontendAraayProps;
