import React from "react";

const HowCard = () => {
  return (
    <div
      className="cardContainer"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          justifyContent: "center",

          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/check-mark.png"
            alt="image"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50px",
              boxShadow: "0px 1px 6px #00000029 ",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            1.Select Category
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          justifyContent: "center",

          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/user-interface.png"
            alt="image"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50px",
              boxShadow: "0px 1px 6px #00000029 ",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            2. Fill in details
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          justifyContent: "center",

          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/Rupee.png"
            alt="image"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50px",
              boxShadow: "0px 1px 6px #00000029 ",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            3.Get the Right Price
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowCard;
