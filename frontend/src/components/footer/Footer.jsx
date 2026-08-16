import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";

import BlurText from "../BlurText/BlurText";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="portfolio-footer">
      {/* =========================
          FOOTER TITLE
      ========================= */}

      <div className="footer-title">
        <BlurText
          text="LET'S"
          delay={120}
          animateBy="letters"
          direction="bottom"
          stepDuration={0.4}
          threshold={0.1}
          rootMargin="-80px"
          className="footer-title-white"
        />

        <BlurText
          text="TALK"
          delay={120}
          animateBy="letters"
          direction="bottom"
          stepDuration={0.4}
          threshold={0.1}
          rootMargin="-80px"
          className="footer-title-red"
        />
      </div>

      {/* =========================
          SOCIAL LINKS
      ========================= */}

      <div className="footer-socials">
        <a
          href="mailto:kurtjustin10@gmail.com"
          aria-label="Email"
          className="footer-social"
        >
          <IoMailOutline />
        </a>

        <a
          href="https://www.facebook.com/kurt.justin.200602"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="footer-social"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/in/kurt-justin-leona-2b982b3a3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-social"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/LeonaSite"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-social"
        >
          <FaGithub />
        </a>
      </div>

      {/* =========================
          FOOTER DESCRIPTION
      ========================= */}

      <p className="footer-description">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to collaborate.
        <br />
        Hope we get to build something great together someday!
      </p>

      {/* =========================
          BACK TO TOP
      ========================= */}

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
