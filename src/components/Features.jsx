import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Features = () => {
  return (
    <motion.section
      className="section__margin feature-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="h-24 w-24 glow-orb glow-orb-purple" />
      <motion.div variants={itemVariants} className="feature-image">
        <img
          src="man-working-using-virtual-reality-4019408-3337377@0 1.png"
          alt="Promotional image 1"
        />
      </motion.div>
      <motion.div
        variants={{ ...itemVariants, hidden: { opacity: 0, x: 50 } }}
        className="feature-content"
      >
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
        <button className="btn-primary max-w-fit hover:scale-105 transition-all">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Features;
