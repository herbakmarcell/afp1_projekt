import React from "react";
import "../../index.css"; // Ha a CSS fájlt külön akarod használni

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Minden jog fenntartva</p>
        <div>
          <a href="/about" className="footer-link">
            Rólunk
          </a>{" "}
          |
          <a href="/privacy" className="footer-link">
            {" "}
            Adatvédelmi irányelvek
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
