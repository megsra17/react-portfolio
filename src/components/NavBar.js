import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50
        ? setStickyClass("fixed-top left-0 z-50 bg-black")
        : setStickyClass("relative");
    }
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${stickyClass}`}>
      <div className="container">
        <img className="navbar-brand" src={logo} alt="Logo" />
        <ul className="navbar-nav">
          <li className="nav-item px-3">
            <a
              onClick={() => onUpdateActiveLink("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              onClick={() => onUpdateActiveLink("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              onClick={() => onUpdateActiveLink("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              onClick={() => onUpdateActiveLink("contact")}
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              onClick={() => onUpdateActiveLink("resume")}
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              href="#resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/megan-rakow-84a236191/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={navIcon1} alt="" />
            </a>
            <a
              href="https://github.com/megsra17"
              target="_blank"
              rel="noreferrer"
            >
              <img src={navIcon2} alt="" />
            </a>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
