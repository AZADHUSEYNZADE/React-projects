import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../components/download.png";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMenu,
} from "react-icons/ai";
import Cancel from "../components/ld_menu_open-512.webp";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mainDiv">
      <div className="firstPart">
        <img src={Logo} alt="logo" />
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineMenu className="open" />
          ) : (
            <img
              src={Cancel}
              alt="cancel"
              style={{ width: "30px" }}
              className="cancel"
            />
          )}
        </button>
      </div>
      <div>
        <ul className={!open ? "toggle" : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="socialIcons">
        <AiOutlineInstagram className="icon" />
        <AiFillFacebook className="icon" />
        <AiFillLinkedin className="icon" />
        <AiFillGithub className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
