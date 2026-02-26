import React from "react";
import { services } from "../constants";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Services = () => {
  return (
    <motion.section
      className="section__margin"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants} className="heading-lg text-center">
        Our Services
      </motion.h2>
      <motion.p
        variants={cardVariants}
        className="body-text text-center max-w-2xl mx-auto"
      >
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </motion.p>
      <div className="services-grid mt-10">
        {services.map((service) => (
          <motion.div
            variants={cardVariants}
            key={service.id}
            className="service-card hover:-translate-y-2 transition-transform duration-300"
          >
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
