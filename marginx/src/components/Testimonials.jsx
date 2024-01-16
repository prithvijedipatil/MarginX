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
          <h2>Testimonials</h2>
          <h3>What our users have to say</h3>
        </div>
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonials;
