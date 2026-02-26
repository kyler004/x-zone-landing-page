import React from "react";
import { teamMembers } from "../constants";
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Team = () => {
  return (
    <motion.section
      className="section__padidng section__margin"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <motion.h1 variants={itemVariants} className="heading-lg mb-4">
          Met Our Team
        </motion.h1>
        <motion.p variants={itemVariants} className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          <br />
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </motion.p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <motion.div
            variants={itemVariants}
            key={member.id}
            className="team-card gradient-border hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="team-image">
              <img src={member.profilePicture} alt={member.name} />
            </div>
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>
            <div className="flex flex-row gap-1">
              <img
                src="/linkedin-box-fill.svg"
                alt="linkedin"
                className="h-4 w-4 hover:scale-125 transition-transform cursor-pointer"
              />
              <img
                src="/skype-fill.svg"
                alt="skype"
                className="h-4 w-4 hover:scale-125 transition-transform cursor-pointer"
              />
              <img
                src="/twitter-fill.svg"
                alt="twitter"
                className="h-4 w-4 hover:scale-125 transition-transform cursor-pointer"
              />
              <img
                src="/facebook-circle-fill.svg"
                alt="facebook"
                className="h-4 w-4 hover:scale-125 transition-transform cursor-pointer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;
