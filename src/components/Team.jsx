import React from "react";
import { teamMembers } from "../constants";

const Team = () => {
  return (
    <section className="section__padidng section__margin">
      <div className="section-header">
        <h1 className="heading-lg mb-4">Met Our Team</h1>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          <br />
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              <img src={member.profilePicture} alt={member.name} />
            </div>
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>
            <div className="flex flex-row gap-1">
              <img
                src="/linkedin-box-fill.svg"
                alt="linkedin"
                className="h-4 w-4"
              />
              <img src="/skype-fill.svg" alt="skype" className="h-4 w-4" />
              <img src="/twitter-fill.svg" alt="twitter" className="h-4 w-4" />
              <img
                src="/facebook-circle-fill.svg"
                alt="facebook"
                className="h-4 w-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
