import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="navbar section__padding">
      <div className="navbar-logo">
        <img src="/Logo.png" alt="x-zone's logo" />
      </div>
      <nav className="nav-links">
        <ul className="flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav-link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta btn-primary">Contact Us</button>
      </nav>
    </header>
  );
};

export default Navbar;
