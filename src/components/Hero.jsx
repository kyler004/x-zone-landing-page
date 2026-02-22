import React from "react";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className=" section__padding flex justify-between items-center flex-wrap flex-col md:flex-row ">
      <div className="section-container flex-1 flex flex-col gap-4">
        <h1 className="  heading-xl text-gradient mb-4 leading-0">
          Virtual Reality <br />
          Business Solutions
        </h1>
        <p className=" body-text mb-4">
          We have over 15 year exprience in business consultting arena. We have
          over <br /> 15 year exprience in business consultting arena and
          artficial intelligence.
        </p>
        <div className="flex gap-6 mt-10">
          <button className="hero-cta btn-primary">Get Started</button>
          <button className="btn-outline">
            <PlayCircle className="mr-2" /> Watch video
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="/Saly-19.png"
          alt="Hero image"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
