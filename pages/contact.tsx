"use client";
import React from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaInstagram, FaArrowLeft } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Roboto', Arial, sans-serif",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#005b96",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          <FaEnvelope style={{ marginRight: "10px", color: "#00bfff" }} /> Contact Me
        </h1>
        <hr
          style={{
            width: "80px",
            border: "2px solid #00bfff",
            margin: "0 auto",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Introduction */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
          animation: "fadeIn 1.2s ease-in-out",
        }}
      >
        If you would like to get in touch, feel free to reach out through any of the following platforms:
      </p>

      {/* Contact List */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Contact Items */}
        {[
          {
            icon: <FaEnvelope size={25} color="#005b96" />,
            text: "kusamakhan1234@gmail.com",
            link: "mailto:kusamakhan1234@gmail.com",
          },
          {
            icon: <FaWhatsapp size={25} color="#25D366" />,
            text: "+92 315 4996438",
            link: "https://wa.me/923154996438",
          },
          {
            icon: <FaGithub size={25} color="#171515" />,
            text: "github.com/usama7871",
            link: "https://github.com/usama7871",
          },
          {
            icon: <FaInstagram size={25} color="#E4405F" />,
            text: "instagram.com/usama.1072",
            link: "https://instagram.com/usama.1072'",
          },
        ].map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(5px)",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 14px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
            }}
          >
            {item.icon}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#005b96",
                textDecoration: "none",
                fontWeight: "bold",
                marginLeft: "10px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00bfff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#005b96")}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Back to Home Button */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #005b96, #00bfff)",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 14px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          }}
        >
          <FaArrowLeft style={{ marginRight: "10px" }} />
          Back to Home
        </a>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
