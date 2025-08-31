import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Custom hook for fade-in on scroll

  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="font-sans  text-gray-900 min-h-screen">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
