
import React from "react";
import About from "../components/about";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Languages from "../components/languages";


function Home() {
    return (
    <>
    <Navbar /> 
    <Intro /> 
    <About />
    <Languages />
    <Skills />
    <Projects />
      </>);
  }

export default Home;