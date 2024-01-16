import React from "react";
import Card from "./Card";

const WhySection = () => {
  return (
    <>
      <div
        className="sectionContainer"
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
          <h2>Why MarginX</h2>
          <h3>Used by leading Brands, Construction Companies and Architects</h3>
        </div>
        <Card />
      </div>
    </>
  );
};

export default WhySection;
