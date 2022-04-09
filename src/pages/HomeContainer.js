import React from "react";
import { Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function HomeContainer() {
  return (
    <>
      <Hero />
      <Card />
      <Footer />
      <Base />
    </>
  );
}

export default HomeContainer;
