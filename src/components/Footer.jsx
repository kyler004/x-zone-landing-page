import React from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer section__padding">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand and Contact Section */}
          <div className="flex flex-col gap-6">
            <div className="navbar-logo">
              <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 body-text-sm">
                <MapPin className="w-4 h-4 text-accent-cyan" /> Dhaka,
                Bangladesh
              </p>
              <p className="flex items-center gap-3 body-text-sm">
                <PhoneCall className="w-4 h-4 text-accent-cyan" /> 0943833399
              </p>
              <p className="flex items-center gap-3 body-text-sm">
                <Mail className="w-4 h-4 text-accent-cyan" /> support@zone.com
              </p>
            </div>
            <div className="footer-social">
              <a href="#" className="footer-social-icon">
                <img src="/ic-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/twitter-line.svg" alt="Twitter" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/ic-instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="footer-social-icon">
                <img src="/ic-pinterset.svg" alt="Pinterest" />
              </a>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="footer-column-title">Service</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Order Management
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Social Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Crypto Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Analyzer of the News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer-column-title">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Our trusted partner
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    New users FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer-column-title">Supports</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer-column-title">Resources</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Download app
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    What’s new
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2021 Zone. - All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="footer-link text-xs">
              Privacy
            </a>
            <a href="#" className="footer-link text-xs">
              Security
            </a>
            <a href="#" className="footer-link text-xs">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
