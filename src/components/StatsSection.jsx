

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaCity, FaBuilding, FaHandHoldingUsd } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StatsSection.css";

import VillaIcon from "../assets/images/villa.png"

const StatsSection = () => {
  const stats = [
    {
      icon: VillaIcon,
      number: "58",
      text: "Projects Internationally",
    },
    {
      icon: VillaIcon,
      number: "11",
      text: "Communities Internationally",
    },
    {
      icon: VillaIcon,
      number: "2,000+",
      text: "Units across all our projects",
    },
    {
      icon: VillaIcon,
      number: "5.6",
      text: "Billion AED Sales Achieved in 2024",
    },
  ];

  const [hoverTransform, setHoverTransform] = useState({});
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = ((x - rect.width / 2) / rect.width) * 40;
    const moveY = ((y - rect.height / 2) / rect.height) * 40;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    setHoverTransform({
      [index]: `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
    setHoverIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoverTransform({
      [index]: `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`,
    });
    setHoverIndex(null);
  };

  return (
    <div className="stats-section text-white">
      <div className="container">


        <Row className="justify-content-center">
          {stats.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={3}
              className="text-center mb-4 position-relative"
            >
              <div
                className="stats-circle"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  transform: hoverTransform[index] || "translate(0px, 0px)",
                }}
              >
                {/* Golden Dot + Ring */}
                <div className="golden-dot">
                  <div className="dot-ring">
                    <div className="dot-inner"></div>
                  </div>
                </div>

                {/* Icon */}
                <div className="stats-icon">{item.icon}</div>

                {/* Number */}
                <h2
                  className={`stats-number ${hoverIndex === index ? "zoom-in" : ""
                    }`}
                >
                  {item.number}
                </h2>

                {/* Text */}
                <p
                  className={`stats-text ${hoverIndex === index ? "zoom-in" : ""
                    }`}
                >
                  {item.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default StatsSection;
