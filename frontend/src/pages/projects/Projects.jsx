import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlurText from "../../components/BlurText/BlurText";
import "./Projects.css";

// Project images
import osmsImage from "../../assets/project-sample/OSMS.png";
import designXcelImage from "../../assets/project-sample/designXcel.png";
import airsoftTechImage from "../../assets/project-sample/airsoftTech.png";
import biteBytesImage from "../../assets/project-sample/biteBytes.jpg";

// Technology logos
import reactLogo from "../../assets/logo/reactjs-logo.webp";
import nodeLogo from "../../assets/logo/nodejs-logo.webp";
import mySqlLogo from "../../assets/logo/mySQL-logo.webp";
import msSqlLogo from "../../assets/logo/msSQL-logo.webp";

export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });

    // Refresh AOS when the page is loaded
    AOS.refresh();
  }, []);

  const projects = [
    {
      title: "OSMS: Online Supply Management System",
      year: "2026",
      image: osmsImage,
      imageLabel: "Admin Dashboard Interface",
      side: "left",

      description: [
        "End-to-End Resource Tracking: Streamlines property requisition, stock inventory, and invoice management to ensure seamless operational continuity across organizational departments.",

        "Streamlined Procurement Planning: Features an automated appointment system alongside detailed report generation and PMP process guidance to optimize annual departmental budgeting and supply allocation.",
      ],

      technologies: [
        {
          name: "React JS",
          logo: reactLogo,
        },
        {
          name: "Node JS",
          logo: nodeLogo,
        },
        {
          name: "MySQL",
          logo: mySqlLogo,
        },
      ],
    },

    {
      title: "DesignXcel",
      year: "2026",
      image: designXcelImage,
      imageLabel: "Admin Sales Record",
      side: "right",

      description: [
        "Comprehensive E-Commerce & CMS Solution: Developed a web-based e-commerce platform and inventory management system integrated with a Content Management System (CMS) for Design Excellence Home and Office System Company.",

        "Interactive AR/3D Showcase & Chat: Features interactive 3D modeling and Augmented Reality (AR) viewing for home and office appliances, combined with real-time chat support to deliver an immersive shopping and customer assistance experience.",
      ],

      technologies: [
        {
          name: "React JS",
          logo: reactLogo,
        },
        {
          name: "Node JS",
          logo: nodeLogo,
        },
        {
          name: "MS SQL",
          logo: msSqlLogo,
        },
      ],
    },

    {
      title: "AirsoftTech",
      year: "2025",
      image: airsoftTechImage,
      imageLabel: "3D View of Product",
      side: "left",

      description: [
        "Immersive E-Commerce Platform: Designed an interactive digital storefront for 3D model products tailored for EDGI CUSTOM WORKS, bringing online retail with high-fidelity visual interaction.",

        "3D Visualization & Real-Time Support: Integrates interactive 360-degree product visualization—boosting buyer confidence and reducing return rates—alongside real-time chat support for instant customer assistance and technical inquiries.",
      ],

      technologies: [
        {
          name: "React JS",
          logo: reactLogo,
        },
        {
          name: "Node JS",
          logo: nodeLogo,
        },
        {
          name: "MS SQL",
          logo: msSqlLogo,
        },
      ],
    },

    {
      title: "Bite & Bytes: POS System",
      year: "2024",
      image: biteBytesImage,
      imageLabel: "Food Selection",
      side: "right",

      description: [
        "Market-Driven Enterprise Solution: Built on targeted industry research to resolve core operational pain points across inventory tracking, checkout transactions, and real-time stock updates.",

        "Strategic Business Growth: Establishes unified sales tracking and clear operational milestones to deliver reliable, scalable retail and inventory management workflows.",
      ],

      technologies: [
        {
          name: "Node JS",
          logo: nodeLogo,
        },
        {
          name: "MS SQL",
          logo: msSqlLogo,
        },
      ],
    },
  ];

  return (
    <div className="project-page">
      <section className="project-section">
        {/* PAGE TITLE */}
        <div className="project-header">
          <BlurText
            text="PROJECTS"
            delay={100}
            animateBy="letters"
            direction="top"
            stepDuration={0.4}
            threshold={0.2}
            className="project-title-blur"
          />

          <p data-aos="fade-up" data-aos-delay="500">
            A selection of projects I've developed throughout my journey in
            software development.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="project-timeline">
          {/* Animated vertical line */}
          <div className="timeline-line">
            <div className="timeline-line-progress"></div>
          </div>

          {projects.map((project, index) => (
            <div
              className={`project-timeline-item ${project.side}`}
              key={project.title}
            >
              {/* Timeline node - appears FIRST */}
              <div
                className="timeline-node"
                data-aos="fade-right"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              ></div>

              {/* PROJECT CARD - appears AFTER node */}
              <div
                className={`project-card ${project.side}`}
                data-aos="fade-right"
                data-aos-delay={index * 150 + 450}
                data-aos-duration="900"
              >
                {/* LEFT SIDE CONTENT */}
                {project.side === "left" && (
                  <>
                    <ProjectInformation project={project} />

                    <ProjectImage project={project} />
                  </>
                )}

                {/* RIGHT SIDE CONTENT */}
                {project.side === "right" && (
                  <>
                    <ProjectImage project={project} />

                    <ProjectInformation project={project} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* =====================================================
   PROJECT INFORMATION
===================================================== */

function ProjectInformation({ project }) {
  return (
    <div className="project-information">
      <div className="project-title-row">
        <h2>{project.title}</h2>
        <span>{project.year}</span>
      </div>

      <ul className="project-description">
        {project.description.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>

      {/* TECHNOLOGY PILLS */}
      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <div
            className="project-tech"
            key={`${project.title}-${technology.name}`}
          >
            <img src={technology.logo} alt={technology.name} />

            <span className="technology-tooltip">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   PROJECT IMAGE
===================================================== */

function ProjectImage({ project }) {
  return (
    <div className="project-image-container">
      <img src={project.image} alt={project.title} />

      <span className="project-image-label">{project.imageLabel}</span>
    </div>
  );
}
