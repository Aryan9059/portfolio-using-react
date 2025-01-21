import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = lastActiveLink.current;
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;
    }
  };

  useEffect(() => {
    // Initialize active box position on load
    initActiveBox();

    // Update active box on window resize
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeCurrentLink = (event) => {
    // Remove 'active' from the last link
    lastActiveLink.current?.classList.remove("active");

    // Add 'active' to the current link
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Update the active box position
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = event.target;
    activeBox.current.style.top = `${offsetTop}px`;
    activeBox.current.style.left = `${offsetLeft}px`;
    activeBox.current.style.width = `${offsetWidth}px`;
    activeBox.current.style.height = `${offsetHeight}px`;
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Youtube", link: "https://www.youtube.com/results?search_query=fizanto+fuzz", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={className.includes("active") ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
