import React from "react";
import { FaTwitter, FaGithub, FaTrello } from "react-icons/fa";
import "../../Css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Autósiskola</h1>
      <div className="footer-content">
        <div className="social-icons">
          <Link to="https://github.com" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <FaTwitter />
          </Link>
          <Link to="https://trello.com" target="_blank">
            <FaTrello />
          </Link>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Autósiskola</p>
        </div>
      </div>
      <div className="background-circles-left"></div>
      <div className="background-circles-right"></div>
    </footer>
  );
};

export default Footer;
