import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        //Name of system
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default Header;
