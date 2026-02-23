import React from "react";
import { services } from "../constants";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section className="section__margin">
      <h2 className="heading-lg text-center">Our Services</h2>
      <p className="body-text text-center max-w-2xl mx-auto">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="services-grid mt-10">
        {services.map((service) => (
          <div key={service.id} className="service-card ">
            <div className={` inline-block rounded-full p-4 ${service.color}`}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <button className="flex items-center gap-2 hover:gap-4 hover:text-accent-blue transition-all duration-300 ease-in-out">
              Learn More <ArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
