import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const baseLinkStyle = {
    fontSize: "18px",
    fontWeight: "600",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  };

  const activeLinkStyle = {
    backgroundColor: "#3b82f6", // Blue for active
    color: "white",
  };

  const inactiveLinkStyle = {
    color: "#9ca3af", // Gray for inactive
    backgroundColor: "transparent",
    hover: {
      color: "white",
      backgroundColor: "#4b5563", // Dark gray on hover
    },
  };

  return (
    <nav
      className="navbar"
    >
      {/* Toggle button for mobile view */}
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
        ☰
      </button>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            style={{
              ...baseLinkStyle,
              ...(isActive("/") ? activeLinkStyle : inactiveLinkStyle),
            }}
            onClick={() => {
              setTimeout(()=>{
                window.location.reload()
              },16)
            }}
          >
            PlayAI
          </Link>
        </li>
        <li>
          <Link
            to="/mickey-voice"
            style={{
              ...baseLinkStyle,
              ...(isActive("/mickey-voice")
                ? activeLinkStyle
                : inactiveLinkStyle),
            }}
            onClick={() => {
              setTimeout(()=>{
                window.location.reload()
              },16)
            }}
          >
            Mickey
          </Link>
        </li>
        <li>
          <Link
            to="/peter-voice"
            style={{
              ...baseLinkStyle,
              ...(isActive("/peter-voice")
                ? activeLinkStyle
                : inactiveLinkStyle),
            }}
            onClick={() => {
              setTimeout(()=>{
                window.location.reload()
              },16)
            }}
          >
            PeterGriffin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
