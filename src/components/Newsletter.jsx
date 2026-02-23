import React from "react";

const Newsletter = () => {
  return (
    <section className="section__margin section__padding newsletter-section">
      <div className="section-container">
        <h1 className="heading-lg text-center">
          Subscribe to get the Latest News
        </h1>
        <p className="body-text text-center">
          We recommended you to subscribe to our newspaper,drop your email below
          to get daily update about us
        </p>
      </div>
      <div className="newsletter-form section-container">
        <input
          className="newsletter-input"
          type="text"
          placeholder="Enter your email"
        />
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
