import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Service";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Bambino",
  };
  return (
    <>
      <HeroSection myData={data} />;
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
