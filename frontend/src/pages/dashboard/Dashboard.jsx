import React, { useEffect } from "react";
import "./Dashboard.css";
import SplitText from "../../components/SplitText/SplitText";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import AOS from "aos";
import "aos/dist/aos.css";

import gradImage from "../../assets/grad-bw.png";

import javascriptLogo from "../../assets/logo/javaScript-logo.webp";
import reactLogo from "../../assets/logo/reactjs-logo.webp";
import nodeLogo from "../../assets/logo/nodejs-logo.webp";
import htmlCssLogo from "../../assets/logo/html-css-logo.webp";
import gitLogo from "../../assets/logo/git-logo.webp";
import msSqlLogo from "../../assets/logo/msSQL-logo.webp";
import mySqlLogo from "../../assets/logo/mySQL-logo.webp";

import figmaLogo from "../../assets/logo/figma-logo.webp";
import canvaLogo from "../../assets/logo/canva-logo.webp";

import geminiLogo from "../../assets/logo/gemini-logo.webp";
import chatgptLogo from "../../assets/logo/chatgpt-logo.webp";
import claudeLogo from "../../assets/logo/claude-logo.webp";

export default function Dashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const mainSkills = [
    {
      name: "JavaScript",
      logo: javascriptLogo,
      description:
        "Core language used for dynamic client-side logic, interactive features, and full-stack integration.",
    },
    {
      name: "React JS",
      logo: reactLogo,
      description:
        "Component-based library used for building interactive, responsive user interfaces and single-page web applications.",
    },
    {
      name: "Node JS",
      logo: nodeLogo,
      description:
        "Server-side JavaScript runtime environment for building scalable RESTful APIs and backend services.",
    },
    {
      name: "HTML & CSS",
      logo: htmlCssLogo,
      description:
        "Foundation for structuring web pages and styling modern, responsive grid and flex layouts.",
    },
    {
      name: "Git",
      logo: gitLogo,
      description:
        "Distributed version control system used for tracking code changes, managing branches, and team collaboration.",
    },
    {
      name: "MS SQL",
      logo: msSqlLogo,
      description:
        "Relational database management system used for structuring tables, complex queries, and enterprise data storage.",
    },
    {
      name: "My SQL",
      logo: mySqlLogo,
      description:
        "Open-source relational database system utilized for managing structured data and reliable query performance.",
    },
  ];

  const designTools = [
    {
      name: "Figma",
      logo: figmaLogo,
      description:
        "Interface design tool for prototyping, creating UI components, wireframing, and visual design workflows.",
    },
    {
      name: "Canva",
      logo: canvaLogo,
      description:
        "Graphic design platform used for producing visual assets, presentation decks, and marketing materials.",
    },
  ];

  const aiTools = [
    {
      name: "Gemini",
      logo: geminiLogo,
      description:
        "Multimodal AI assistant used for code generation, technical problem-solving, and workflow automation.",
    },
    {
      name: "ChatGPT",
      logo: chatgptLogo,
      description:
        "Conversational AI model leveraged for code refactoring, logic debugging, and rapid ideation.",
    },
    {
      name: "Claude",
      logo: claudeLogo,
      description:
        "Advanced AI model utilized for complex code analysis, detailed documentation, and contextual reasoning.",
    },
  ];

  const renderSkills = (skills) => (
    <div className="skills-grid">
      {skills.map((skill) => (
        <SpotlightCard
          key={skill.name}
          className="skill-card"
          spotlightColor="rgba(0, 229, 255, 0.18)"
        >
          <div className="skill-card-header">
            <div className="skill-logo-container">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />
            </div>

            <h3>{skill.name}</h3>
          </div>

          <p>{skill.description}</p>
        </SpotlightCard>
      ))}
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* =========================
          HERO SECTION
      ========================= */}

      <div className="section-1">
        {/* LEFT - TEXT */}
        <div className="section-1-text">
          <SplitText
            text="Always learning, constantly adapting, and ready to turn technological challenges into opportunities for growth."
            className="hero-title"
            delay={35}
            duration={1.1}
            ease="power3.out"
            splitType="words"
            from={{
              opacity: 0,
              y: 40,
            }}
            to={{
              opacity: 1,
              y: 0,
            }}
          />

          <SplitText
            text="Full-Stack Developer experienced in end-to-end web development. Passionate about building scalable applications, solving complex problems, and continuously expanding skill sets in fast-paced tech environments."
            className="hero-subtitle"
            delay={10}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{
              opacity: 0,
              y: 25,
            }}
            to={{
              opacity: 1,
              y: 0,
            }}
          />
        </div>

        {/* RIGHT - IMAGE */}
        <div className="section-1-image">
          <img src={gradImage} alt="Kurt Justin Leona" />
        </div>
      </div>

      {/* =========================
          SKILLS SECTION
      ========================= */}

      <section
        className="skills-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          className="skills-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {/* MAIN SKILLS */}
          <div className="skills-category">
            <h2 className="skills-heading">MAIN SKILLS / STACK</h2>

            {renderSkills(mainSkills)}
          </div>

          {/* WEB DESIGNING TOOLS */}
          <div
            className="skills-category"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="skills-heading">WEB DESIGNING TOOLS</h2>

            {renderSkills(designTools)}
          </div>

          {/* AI TOOLS */}
          <div
            className="skills-category"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="skills-heading">AI TOOLS</h2>

            {renderSkills(aiTools)}
          </div>
        </div>
      </section>
    </div>
  );
}
