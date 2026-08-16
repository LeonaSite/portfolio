import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

// About photo
import aboutPhoto from "../../assets/about-photo.jpg";

// Certificates
import tesdaCybersec from "../../assets/certificates/tesda-cybersec.jpg";
import symposium from "../../assets/certificates/symposium.jpg";
import javaFundamentals from "../../assets/certificates/java-fundementals.jpg";
import systemAdministration from "../../assets/certificates/System-Administration.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });

    AOS.refresh();

    // Prevent copying certificate images through keyboard shortcuts
    const preventCopy = (event) => {
      if (event.ctrlKey && ["c", "x", "s"].includes(event.key.toLowerCase())) {
        const certificateArea = event.target.closest(".certificate-item");

        if (certificateArea) {
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", preventCopy);

    return () => {
      document.removeEventListener("keydown", preventCopy);
    };
  }, []);

  const certificates = [
    {
      image: tesdaCybersec,
      title: "TESDA Cyber Microsoft Security",
    },
    {
      image: symposium,
      title: "2025 ICT - COE SYMPOSIUM & EXHIBIT",
    },
    {
      image: javaFundamentals,
      title: "Java Fundamentals",
    },
    {
      image: systemAdministration,
      title: "System Administration",
    },
  ];

  const preventCertificateAction = (event) => {
    event.preventDefault();
  };

  return (
    <div className="about-page">
      {/* =====================================================
          ABOUT PHOTO
      ===================================================== */}

      <section className="about-hero">
        <div
          className="about-photo-wrapper"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            src={aboutPhoto}
            alt="About me"
            className="about-photo"
            draggable="false"
          />
        </div>
      </section>

      {/* =====================================================
          ABOUT ME
      ===================================================== */}

      <section className="about-content">
        <div
          className="about-text-section"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h1>ABOUT ME</h1>

          <p>
            Filipino Full-Stack Web Developer with a passion for continuous
            learning and problem-solving. I specialize in end-to-end web
            development, transforming complex requirements into clean,
            efficient, and scalable digital solutions. Having served as the Lead
            Programmer for key capstone and thesis initiatives, I have hands-on
            experience guiding projects across their entire lifecycle from
            initial architectural planning to final deployment.
          </p>

          <p>
            Adaptive and quick to master emerging stacks, I combine front-end
            reactivity with robust back-end systems. I thrive in collaborative
            environments where I can leverage technical expertise, tackle
            challenging workflows, and contribute value to engineering teams.
          </p>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATES
      ===================================================== */}

      <section className="certificates-section">
        <div
          className="certificates-header"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h1>CERTIFICATES</h1>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div
              className="certificate-item"
              key={certificate.title}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="800"
              onContextMenu={preventCertificateAction}
              onDragStart={preventCertificateAction}
              onSelectStart={preventCertificateAction}
              onCopy={preventCertificateAction}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  draggable="false"
                  onContextMenu={preventCertificateAction}
                  onDragStart={preventCertificateAction}
                />
              </div>

              <p>{certificate.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
