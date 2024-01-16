import React from "react";
import Card from "./Card";
import HowCard from "./HowCard";

const HowSection = () => {
  return (
    <>
      <div
        className="sectionContainer"
        style={{
          marginTop: "80px",
          marginBottom: "20px",
          backgroundColor: "#086aa7",
          padding: "20px",
          color: "white",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h2>How MarginX Works</h2>
          <h3>Right price estimation for all the products in simple steps</h3>
        </div>
        <HowCard />
      </div>
    </>
  );
};

export default HowSection;
