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
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent-blue/20 blur-[150px]" />
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-purple/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent-cyan/15 blur-[150px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Features />
        <Features2 />
        <Team />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
