import { useParams, Navigate, useNavigate } from "react-router-dom";

import DepthCarousel from "../../components/depthCarousel/DepthCarousel";

import osmsClient from "../../assets/project-client/osms-client.jpg";
import designXcelClient from "../../assets/project-client/designXcel-client.jpg";
import airsoftTechClient from "../../assets/project-client/airsoftTech-client.jpg";
import biteBytesClient from "../../assets/project-client/biteBytes-client.jpg";

import osms1 from "../../assets/project-sample/osms/osms-dashboard.jpg";
import osms2 from "../../assets/project-sample/osms/osms-record.jpg";
import osms3 from "../../assets/project-sample/osms/osms-request.jpg";
import osms4 from "../../assets/project-sample/osms/osms-stock.jpg";

import designXcel1 from "../../assets/project-sample/designXcel/designXcel-dashboard.jpg";
import designXcel2 from "../../assets/project-sample/designXcel/designXcel-homepage.jpg";
import designXcel3 from "../../assets/project-sample/designXcel/designXcel-product.jpg";
import designXcel4 from "../../assets/project-sample/designXcel/designXcel-reports.jpg";
import designXcel5 from "../../assets/project-sample/designXcel/designXcel-sales.jpg";

import airsoftTech1 from "../../assets/project-sample/airsoftTech/airsoftTech-dashboard.jpg";
import airsoftTech2 from "../../assets/project-sample/airsoftTech/airsoftTech-home.jpg";
import airsoftTech3 from "../../assets/project-sample/airsoftTech/airsoftTech-models.png";
import airsoftTech4 from "../../assets/project-sample/airsoftTech/airsoftTech-order.jpg";
import airsoftTech5 from "../../assets/project-sample/airsoftTech/airsoftTech-shop.jpg";

import biteBytes1 from "../../assets/project-sample/biteBytes/biteBytes-check.jpg";
import biteBytes2 from "../../assets/project-sample/biteBytes/biteBytes-login.jpg";
import biteBytes3 from "../../assets/project-sample/biteBytes/biteBytes-selection.jpg";

import "./ProjectDetails.css";

const projects = {
  OSMS: {
    title: "OSMS: Online Supply Management System",

    technologies: ["REACT JS", "NODE JS", "MYSQL"],

    client: "National Meat Inspection Service",

    role: "Full-stack Developer",

    year: "2026",

    clientImage: osmsClient,

    screenshots: [
      {
        image: osms1,
        alt: "OSMS dashboard",
      },
      {
        image: osms2,
        alt: "OSMS requisition system",
      },
      {
        image: osms3,
        alt: "OSMS request management",
      },
      {
        image: osms4,
        alt: "OSMS inventory management",
      },
    ],

    context:
      "The Property Division of the National Meat Inspection Service (NMIS) previously relied on Google Sheets and Google Drive to manage inventory. Over time, manual data entry led to frequent duplicate records, fragmented files, and significant delays when searching through spreadsheets to update stock. Requesters had no visibility into real-time stock availability and were forced to manually fill out 3 copies of physical requisition slips for every transaction. Additionally, generating procurement and inventory reports for administrative review was a time-consuming and tedious process.",

    features: [
      "Online Request System: Replaces manual paperwork by allowing users to submit supply requisitions digitally and track their approval status in real time.",

      "Real-Time Inventory Management: Eliminates duplicate entries and provides accurate, up-to-date stock visibility for both administrators and requesters.",

      "Automated Requisition & Printing: Streamlines paper-based approvals with automated requisition slip generation and direct 1-click printing capabilities.",

      "Appointment System: Schedules and organizes physical stock collection to prevent crowding and streamline item handover workflows.",

      "Budget Planning & Report Generation: Equips administrators with automated reporting tools to simplify procurement planning and departmental budgeting (PPMP).",
    ],
  },

  DesignXcel: {
    title:
      "DesignXcel: A Web-Based E-Commerce and Inventory Management with Content Management System",

    technologies: ["REACT JS", "NODE JS", "MSSQL", "Azure"],

    client: "Design Excellence Home and Office System Company",

    role: "Quality Assurance",

    year: "2026",

    clientImage: designXcelClient,

    screenshots: [
      {
        image: designXcel1,
        alt: "DesignXcel dashboard",
      },
      {
        image: designXcel2,
        alt: "DesignXcel homepage",
      },
      {
        image: designXcel3,
        alt: "DesignXcel product",
      },
      {
        image: designXcel4,
        alt: "DesignXcel reports",
      },
      {
        image: designXcel5,
        alt: "DesignXcel sales",
      },
    ],

    context:
      "Design Excellence Home & Office System Co. faces severe operational and competitive challenges due to reliance on legacy digital and manual infrastructures. Its current Wix-based website is unorganized, non-responsive on mobile, and offers limited administrative control over content—causing delayed catalog updates and eroding brand credibility. Internally, the firm relies on manual Microsoft Excel spreadsheets to manage procurement, supply lines, and stock levels. This fragmented workflow lacks real-time data synchronization, is highly prone to human error, and creates fulfillment bottlenecks, leading to stock shortages and delivery delays.",

    features: [
      "Automated Inventory Management System: Synchronizes stock levels in real time to eliminate spreadsheet dependence, optimize procurement, and avoid shortages.",

      "Real-Time Chat Support System: Live communication module providing instant customer support and query resolution.",

      "Role-Based Access Control (RBAC): Restricts and secures administrative functions, data entry, and system views based on user roles.",

      "Detailed Product Viewing: High-resolution catalog browsing with custom color configurations and interactive product details.",

      "3D and AR Furniture Models: Augmented reality and 3D visualization allowing customers to preview products in their space.",

      "Integrated E-Wallet & Payment Gateways: Seamless multi-channel payment options for streamlined corporate and retail checkout.",

      "Detailed Activity Logs: Complete audit trails tracking user actions, administrative edits, and inventory changes for accountability.",

      "Sales Reports & Analytics: Automated generation of real-time sales data, transaction histories, and business performance metrics.",
    ],
  },

  AirsoftTech: {
    title:
      "AirsoftTech: A Web-Based E-Commerce Platform with 3D Modeled Airsoft Attachment",

    technologies: ["REACT JS", "NODE JS", "MSSQL", "Azure"],

    client: "EdGi Custom Works",

    role: "Lead Programmer",

    year: "2025",

    clientImage: airsoftTechClient,

    screenshots: [
      {
        image: airsoftTech1,
        alt: "AirsoftTech dashboard",
      },
      {
        image: airsoftTech2,
        alt: "AirsoftTech home",
      },
      {
        image: airsoftTech3,
        alt: "AirsoftTech 3D models",
      },
      {
        image: airsoftTech4,
        alt: "AirsoftTech order",
      },
      {
        image: airsoftTech5,
        alt: "AirsoftTech shop",
      },
    ],

    context:
      "The growing popularity of military simulation has driven significant demand in the airsoft industry, with enthusiasts seeking high-quality replicas and accessories. However, traditional e-commerce platforms struggle with static images and text-based listings, leaving buyers unable to properly assess product quality or compatibility. Additionally, online shoppers face challenges with unreliable product reviews, lack of trustworthy seller feedback, and inefficient communication during transactions. These issues lead to misinformed purchases, high return rates, and customer dissatisfaction.",

    features: [
      "Interactive 3D Inspection: Real-time 3D model rendering featuring full 360° rotation and dynamic zoom capabilities for thorough visual inspection of products and attachments before purchase.",

      "Real-Time Product Customization: Interactive tools allowing users to customize 3D product components, colors, materials, and attachments with immediate visual updates on the live canvas.",

      "Product Browsing & Ordering: Seamless product discovery with support for custom configuration ordering and manual pre-order processing.",

      "Integrated Payment Gateways & E-Wallets: Built-in checkout integration supporting online payment gateways and local e-wallets alongside standard payment methods.",

      "Promotions & Tracking: Voucher management system for promo codes and discounts, paired with end-to-end real-time order status tracking.",

      "Verified Review System: Authenticated customer feedback mechanism restricted to verified purchasers to prevent spam.",

      "Direct Engagement: Built-in live chat support and dedicated channels for submitting custom product requests.",

      "Order Resolution: Transparent return, refund, and dispute handling workflows with clear status tracking for both buyers and admins.",

      "Role-Based Access Control (RBAC): Granular permission tiers for administrative and employee accounts to restrict sensitive actions by job function.",

      "System Auditing & Reporting: Automated audit trail logging for critical administrative interventions, transaction monitoring, and automated sales reporting dashboards.",

      "Data Encryption at Rest: Strong field-level encryption applied to all sensitive personally identifiable information (PII), including user names, physical addresses, and contact numbers stored in the database.",

      "Authentication & Session Safety: JSON Web Token (JWT) stateless authentication, React client-side protected routes, and enforced RBAC middleware.",

      "Identity Assurance: Argon2/Bcrypt password hashing, strict password policy enforcement, and Two-Factor Authentication (2FA OTP via email or SMS).",
    ],
  },

  BiteBytes: {
    title: "Bite & Bytes: POS System",

    technologies: ["NODE JS", "MSSQL"],

    client: "Budbod ni Kuya Rob",

    role: "Lead Programmer",

    year: "2024",

    clientImage: biteBytesClient,

    screenshots: [
      {
        image: biteBytes1,
        alt: "Bite & Bytes POS checkout",
      },
      {
        image: biteBytes2,
        alt: "Bite & Bytes login",
      },
      {
        image: biteBytes3,
        alt: "Bite & Bytes product selection",
      },
    ],

    context:
      "Budbod ni Kuya Rob is a growing micro-business currently facing operational challenges in managing daily orders, tracking inventory, and maintaining smooth workflows due to its reliance on paper-based processes. To streamline operations, reduce human error, and accelerate service delivery, the business requires a localized, digital point-of-sale and inventory control solution.",

    features: [
      "Point of Sale (POS) Interface: A fast, intuitive checkout system designed to process customer orders rapidly, generate digital or printed receipts, and calculate totals and change automatically during peak hours.",

      "Comprehensive Inventory Management: A real-time inventory tracking system that automatically updates stock levels upon each sale, alerts staff to low-stock thresholds, and prevents stockouts of critical menu items.",

      "Ingredient & Recipe Listing: Detailed tracking of raw ingredients mapped directly to specific menu items, enabling precise cost control, waste monitoring, and automated deduction of raw materials per order sold.",

      "Visual Product Catalog: A high-visibility, image-based menu grid that allows staff to quickly identify, select, and customize items, significantly speeding up order entry and reducing training time for new employees.",
    ],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects[projectId];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="project-details">
      {/* PROJECT HEADER */}
      <section className="project-details-header">
        <div className="project-details-title">
          <h1>{project.title}</h1>

          <div className="project-details-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {/* SCREENSHOT CAROUSEL */}
        <div className="project-details-carousel">
          <DepthCarousel
            items={project.screenshots}
            cardWidth={420}
            cardHeight={260}
            depth={190}
            spread={90}
            tilt={11}
            tiltDirection="right"
            perspective={2400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay
            autoplayDelay={3200}
            loop
            showControls
            showIndicators
          />
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="project-details-meta">
        <div>
          <h4>CLIENT</h4>
          <p>{project.client}</p>
        </div>

        <div>
          <h4>ROLE</h4>
          <p>{project.role}</p>
        </div>

        <div>
          <h4>YEAR</h4>
          <p>{project.year}</p>
        </div>
      </section>

      {/* CLIENT IMAGE */}
      <section className="project-details-client-image">
        <img
          src={project.clientImage}
          alt={`${project.client} project`}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </section>

      {/* CONTEXT */}
      <section className="project-details-section">
        <h2>CONTEXT</h2>

        <div className="project-details-content">
          <p>{project.context}</p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="project-details-section">
        <h2>KEY FEATURES</h2>

        <div className="project-details-content">
          <ul>
            {project.features.map((feature, index) => {
              const separator = feature.indexOf(":");

              const title =
                separator !== -1 ? feature.substring(0, separator) : "";

              const description =
                separator !== -1 ? feature.substring(separator + 1) : feature;

              return (
                <li key={index}>
                  {title && <strong>{title}:</strong>}

                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
