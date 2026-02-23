import React, { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar section-container relative">
      <div className="navbar-logo">
        <img src="/Logo.png" alt="x-zone's logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <ul className="flex flex-row gap-8 lg:gap-10">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-text p-2 z-60"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="nav-mobile-menu">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-2xl font-semibold text-text hover:text-accent-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn-primary w-48 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
