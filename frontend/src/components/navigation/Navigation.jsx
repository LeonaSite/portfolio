import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard, MdPerson } from "react-icons/md";

import "./Navigation.css";
import Footer from "../../components/footer/Footer";

/* =====================================================
   SCROLL TO TOP
===================================================== */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* =====================================================
   NAVIGATION
===================================================== */

export default function Navigation() {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="layout">
      {/* Automatically scroll to top on route change */}
      <ScrollToTop />

      <nav className="top-nav">
        <div className="nav-left">
          <h2>Kurt Justin Leona</h2>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        <div className={`nav-right ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
          <div className="nav-links">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <MdDashboard className="top-nav-icon" />
              Dashboard
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <MdDashboard className="top-nav-icon" />
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <MdPerson className="top-nav-icon" />
              About
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
