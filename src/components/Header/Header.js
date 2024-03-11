import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0 ,marginTop:"1%"}}>
      <Nav>
        <Logo to="/">

          <img
          style={{borderRadius:"50%"}}
            src="/Eslam.jpg"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn resume"
            href="https://www.linkedin.com/in/eslam-elsayed-20a106266/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <i class="fa-solid fa-download"></i>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
