import React from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="section-container section__margin">
      <div className="newsletter-section glass-card glass-card-hover glass-card-glow section__padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center">
            Subscribe to get the Latest News
          </h2>
          <p className="body-text text-center mt-4 mb-8">
            We recommended you to subscribe to our newspaper, drop your email
            below to get daily update about us
          </p>
        </div>
        <div className="newsletter-form">
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="newsletter-btn flex flex-row gap-2">
            <Send size={20} /> Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
