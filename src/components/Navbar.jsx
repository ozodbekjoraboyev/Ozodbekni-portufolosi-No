import React, { useState } from "react";
import saitbarImg from "../assets/saitbar.svg";
import x from "../assets/x.svg";
import { Link } from "react-router-dom"; // To'g'ri versiyani ishlatishingizga ishonch hosil qiling.

function Navbar() {
  const [saitbar, setSaitbar] = useState(false); // Yon panel holati

  return (
    <div>
    
      <div className="container navbar">
        <div className="logo-and-menu">
          <img
            onClick={() => setSaitbar(!saitbar)} // Yon panelni ochish/yopish
            className="menu-icon"
            src={saitbarImg}
            alt="menu toggle"
          />
        </div>
        <div className="nav-links ">
          <Link to="/main" className="nav-link">
            Main
          </Link>
          <Link to="/about" className="nav-link">
            About me
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>

      {/* Saitbar (Yon panel) */}
      {saitbar && (
        <div className="sidebar">
          <img
            onClick={() => setSaitbar(false)} // Yon panelni yopish
            className="close-icon"
            src={x}
            alt="close"
          />
          <div className="sidebar-links">
            <Link
              to="main/"
              className="sidebar-link"
              onClick={() => setSaitbar(false)}
            >
              Main
            </Link>

            <Link
              to="about/"
              className="sidebar-link"
              onClick={() => setSaitbar(false)}
            >
              About me
            </Link>

            <Link
              to="contact"
              className="sidebar-link"
              onClick={() => setSaitbar(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
