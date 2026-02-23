import React from "react";

const Features = () => {
  return (
    <section className="section__margin feature-section">
      <div className="h-24 w-24 glow-orb glow-orb-purple" />
      <div className="feature-image">
        <img
          src="man-working-using-virtual-reality-4019408-3337377@0 1.png"
          alt="Promotional image 1"
        />
      </div>
      <div className="feature-content">
        <h1 className="text-3xl md:text-5xl font-bold text-text leading-snug">
          We complete every projects <br /> extra care as customer need
        </h1>
        <p className="leading-relaxed tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
          tortor, sit amet convallis nuncoe <br /> scelerisque in. orem ipsum
          dolor sit amet, consectetur adipisicing elit. Labore <br /> eius
          molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini,{" "}
          <br /> error. Tempora odit laborum iure inventore possimus laboriosam
          qui nam.{" "}
        </p>
        <button className="btn-primary max-w-fit">Learn More</button>
      </div>
    </section>
  );
};

export default Features;
