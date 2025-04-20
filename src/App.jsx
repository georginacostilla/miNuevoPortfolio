import React from "react";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;
