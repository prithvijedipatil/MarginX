import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div
        className="sectionContainer"
        style={{
          marginTop: "40px",
          marginBottom: "20px",

          padding: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h2 style={{ color: "#086aa7" }}>Testimonials</h2>
          <h3 style={{ color: "grey" }}>What our users have to say</h3>
        </div>
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonials;
