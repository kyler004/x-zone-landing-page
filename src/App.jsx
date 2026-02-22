import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Features2 />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
