import React from "react";
import PythonCard from "./PythonCard";

function PythonCardInfo() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <PythonCard
          title="Python Basic"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          text="
          Image result for python basic
          Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. "
        />
        <PythonCard
          title="Loops"
          img="https://image.shutterstock.com/image-vector/loop-logo-vector-ribbon-lettering-260nw-1425991553.jpg"
          text="
          Looping means repeating something over and over until a particular condition is satisfied. A for loop in Python is a control flow statement that is used to repeatedly execute a group of statements as long as the condition is satisfied."
        />
        <PythonCard
          title="Django"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1280px-Django_logo.svg.png"
          text="Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5 lg:gap-12 w-full p-10">
        <PythonCard
          title="Flask"
          img="https://upload.wikimedia.org/wikipedia/commons/1/1f/Horn_flask_%28PSF%29.png"
          text="
          Flask is a small and lightweight Python web framework that provides useful tools and features that make creating web applications in Python easier. It gives developers flexibility and is a more accessible framework for new developers since you can build a web application quickly using only a single Python file."
        />
        <PythonCard
          title="MySQL"
          img="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
          text="
          MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. "
        />
        <PythonCard
          title="Pycharm IDE"
          img="https://storage.caktusgroup.com/media/blog-images/logo.png"
          text="
          PyCharm is a dedicated Python Integrated Development Environment (IDE) providing a wide range of essential tools for Python developers, tightly integrated to create a convenient environment for productive Python, web, and data science development."
        />
      </div>
    </>
  );
}

export default PythonCardInfo;
