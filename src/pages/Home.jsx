import React from "react";
import Homepage from "../components/Homepage";
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <Homepage />
      <Skills />
      <About />
      <Project />
    </div>
  );
};

export default Home;
