import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <div>
        <img src="/Logo.png" alt="x-zone's logo" />
      </div>

      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
