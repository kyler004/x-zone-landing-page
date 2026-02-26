import React from "react";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Hero = () => {
  return (
    <section className=" section__padding flex justify-between items-center flex-wrap flex-col md:flex-row ">
      <motion.div
        className="section-container flex-1 flex flex-col gap-4"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="heading-xl text-gradient mb-4 leading-0"
        >
          Virtual Reality <br />
          Business Solutions
        </motion.h1>
        <motion.p variants={itemVariants} className="body-text mb-4">
          We have over 15 year exprience in business consultting arena. We have
          over <br /> 15 year exprience in business consultting arena and
          artficial intelligence.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-6 mt-10">
          <button className="hero-cta btn-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
            Get Started
          </button>
          <button className="btn-outline hover:scale-105 transition-all">
            <PlayCircle className="mr-2" /> Watch video
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src="/Saly-19.png"
          alt="Hero image"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
