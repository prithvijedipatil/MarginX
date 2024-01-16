import React from "react";
import Card from "./Card";

const WhySection = () => {
  return (
    <>
      <div
        className="sectionContainer"
        id="about"
        style={{
          marginTop: "80px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h2 style={{ color: "#086aa7" }}>Why MarginX</h2>
          <h3 style={{ color: "grey" }}>
            Used by leading Brands, Construction Companies and Architects
          </h3>
        </div>
        <Card />
      </div>
    </>
  );
};

export default WhySection;
