import React from "react";

const Footer = () => {
  return (
    <footer className="footer section__padding">
      <div className="section-container">
        <div className="footer-grid">
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col gap-6 navbar-logo">
            <img src="/Logo.png" alt="X-Zone Logo" />
            <p className="body-text-sm max-w-xs overflow-hidden">
              Experience the future of digital interaction with X-Zone. We
              provide cutting-edge solutions for the modern web.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-icon">
                <img src="/ic-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/ic-instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/twitter-fill.svg" alt="Twitter" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/linkedin-box-fill.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="footer-column-title">Explore</h4>
            <div className="flex flex-col">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#services" className="footer-link">
                Services
              </a>
              <a href="#features" className="footer-link">
                Features
              </a>
              <a href="#team" className="footer-link">
                Team
              </a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="footer-column-title">Resources</h4>
            <div className="flex flex-col">
              <a href="#" className="footer-link">
                Help Center
              </a>
              <a href="#" className="footer-link">
                Partner
              </a>
              <a href="#" className="footer-link">
                Community
              </a>
              <a href="#" className="footer-link">
                Developers
              </a>
            </div>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <div className="flex flex-col">
              <a href="#" className="footer-link">
                About Us
              </a>
              <a href="#" className="footer-link">
                Career
              </a>
              <a href="#" className="footer-link">
                News
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {new Date().getFullYear()} X-Zone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="footer-bottom-text hover:text-text transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="footer-bottom-text hover:text-text transition-colors"
            >
              Terms & Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
