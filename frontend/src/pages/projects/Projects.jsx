import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlurText from "../../components/BlurText/BlurText";
import "./Projects.css";

// =====================================================
// PROJECT IMAGES
// =====================================================

// OSMS
import osmsDashboard from "../../assets/project-sample/osms/osms-dashboard.jpg";
import osmsRecord from "../../assets/project-sample/osms/osms-record.jpg";
import osmsRequest from "../../assets/project-sample/osms/osms-request.jpg";
import osmsStock from "../../assets/project-sample/osms/osms-stock.jpg";

// DesignXcel
import designXcelDashboard from "../../assets/project-sample/designXcel/designXcel-dashboard.jpg";
import designXcelHomepage from "../../assets/project-sample/designXcel/designXcel-homepage.jpg";
import designXcelProduct from "../../assets/project-sample/designXcel/designXcel-product.jpg";
import designXcelReports from "../../assets/project-sample/designXcel/designXcel-reports.jpg";
import designXcelSales from "../../assets/project-sample/designXcel/designXcel-sales.jpg";

// AirsoftTech
import airsoftTechDashboard from "../../assets/project-sample/airsoftTech/airsoftTech-dashboard.jpg";
import airsoftTechHome from "../../assets/project-sample/airsoftTech/airsoftTech-home.jpg";
import airsoftTechModels from "../../assets/project-sample/airsoftTech/airsoftTech-models.png";
import airsoftTechOrder from "../../assets/project-sample/airsoftTech/airsoftTech-order.jpg";
import airsoftTechShop from "../../assets/project-sample/airsoftTech/airsoftTech-shop.jpg";

// Bite & Bytes
import biteBytesChecking from "../../assets/project-sample/biteBytes/biteBytes-check.jpg";
import biteBytesLogin from "../../assets/project-sample/biteBytes/biteBytes-login.jpg";
import biteBytesSelection from "../../assets/project-sample/biteBytes/biteBytes-selection.jpg";

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

    AOS.refresh();
  }, []);

  const projects = [
    {
      title: "OSMS: Online Supply Management System",
      year: "2026",

      images: [
        {
          src: osmsDashboard,
          label: "Admin Dashboard Interface",
        },
        {
          src: osmsRecord,
          label: "Admin Record Interface",
        },
        {
          src: osmsRequest,
          label: "Supply Request Interface",
        },
        {
          src: osmsStock,
          label: "Stock Management Interface",
        },
      ],

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

      images: [
        {
          src: designXcelDashboard,
          label: "Admin Dashboard",
        },
        {
          src: designXcelHomepage,
          label: "Homepage",
        },
        {
          src: designXcelProduct,
          label: "Product Interface",
        },
        {
          src: designXcelReports,
          label: "Sales Reports",
        },
        {
          src: designXcelSales,
          label: "Admin Sales Record",
        },
      ],

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

      images: [
        {
          src: airsoftTechDashboard,
          label: "Admin Dashboard",
        },
        {
          src: airsoftTechHome,
          label: "Homepage",
        },
        {
          src: airsoftTechModels,
          label: "3D Product Models",
        },
        {
          src: airsoftTechOrder,
          label: "Order Interface",
        },
        {
          src: airsoftTechShop,
          label: "Product Shop",
        },
      ],

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

      images: [
        {
          src: biteBytesSelection,
          label: "Food Selection",
        },
        {
          src: biteBytesLogin,
          label: "Login Interface",
        },
        {
          src: biteBytesChecking,
          label: "Order Checking",
        },
      ],

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
        {/* =====================================================
            PAGE TITLE
        ===================================================== */}

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

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="project-timeline">
          <div className="timeline-line">
            <div className="timeline-line-progress"></div>
          </div>

          {projects.map((project, index) => (
            <div
              className={`project-timeline-item ${project.side}`}
              key={project.title}
            >
              {/* TIMELINE NODE */}

              <div
                className="timeline-node"
                data-aos="fade-right"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              ></div>

              {/* PROJECT CARD */}

              <div
                className={`project-card ${project.side}`}
                data-aos="fade-right"
                data-aos-delay={index * 150 + 450}
                data-aos-duration="900"
              >
                {project.side === "left" && (
                  <>
                    <ProjectInformation project={project} />

                    <ProjectImage project={project} />
                  </>
                )}

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
   PROJECT IMAGE SLIDESHOW
===================================================== */

function ProjectImage({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = project.images;

  /*
    Automatic slideshow
  */

  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  /*
    Close modal with ESC
  */

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  /*
    Next image
  */

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  /*
    Previous image
  */

  const previousImage = () => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  const currentImage = images[currentIndex];

  return (
    <>
      {/* =====================================================
          IMAGE SLIDESHOW
      ===================================================== */}

      <div className="project-image-container">
        <button
          type="button"
          className="project-image-button"
          onClick={() => setIsModalOpen(true)}
          aria-label={`View ${project.title} images`}
        >
          {/* Image */}

          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.label}
              className={`project-slideshow-image ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}

          {/* Hover overlay */}

          <span className="project-view-overlay">
            <span className="project-view-circle">VIEW</span>
          </span>
        </button>

        {/* Image label */}

        <span className="project-image-label">{currentImage.label}</span>

        {/* Slideshow indicators */}

        {images.length > 1 && (
          <div className="project-slide-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`project-slide-dot ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      {isModalOpen && (
        <div
          className="project-image-modal"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}

            <button
              type="button"
              className="project-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image viewer"
            >
              ×
            </button>

            {/* Previous */}

            <button
              type="button"
              className="project-modal-prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Main image */}

            <img
              src={currentImage.src}
              alt={currentImage.label}
              className="project-modal-image"
            />

            {/* Next */}

            <button
              type="button"
              className="project-modal-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Modal information */}

            <div className="project-modal-info">
              <span className="project-modal-title">{project.title}</span>

              <span className="project-modal-label">{currentImage.label}</span>

              <span className="project-modal-counter">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
