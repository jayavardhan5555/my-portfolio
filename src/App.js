import React from "react";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
