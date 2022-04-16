import React from "react";
import GraphicDesignigCardInfo from "./GraphicDesignigCardInfo";

function GraphicDesigningCard() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <GraphicDesignigCardInfo
          title="Python Basic"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png"
          text="
          Image result for python basic
          Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. "
        />
        <GraphicDesignigCardInfo
          title="Loops"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/788px-Adobe_InDesign_CC_icon.svg.png"
          text="
          Looping means repeating something over and over until a particular condition is satisfied. A for loop in Python is a control flow statement that is used to repeatedly execute a group of statements as long as the condition is satisfied."
        />
        <GraphicDesignigCardInfo
          title="Django"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
          text="Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <GraphicDesignigCardInfo
          title="Flask"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png"
          text="
          Flask is a small and lightweight Python web framework that provides useful tools and features that make creating web applications in Python easier. It gives developers flexibility and is a more accessible framework for new developers since you can build a web application quickly using only a single Python file."
        />
        <GraphicDesignigCardInfo
          title="MySQL"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1024px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549"
          text="
          MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. "
        />
        <GraphicDesignigCardInfo
          title="Pycharm IDE"
          img="https://pnggrid.com/wp-content/uploads/2021/05/Canva-app-logo-1024x1024.png"
          text="
          PyCharm is a dedicated Python Integrated Development Environment (IDE) providing a wide range of essential tools for Python developers, tightly integrated to create a convenient environment for productive Python, web, and data science development."
        />
      </div>
    </>
  );
}

export default GraphicDesigningCard;
