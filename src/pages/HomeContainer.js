import React from "react";
import { Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroContainer from "../components/HeroContainer";

function HomeContainer() {
  return (
    <>
      <Hero />

      <HeroContainer />
      <Card />
      <Footer />
      <Base />
    </>
  );
}

export default HomeContainer;
