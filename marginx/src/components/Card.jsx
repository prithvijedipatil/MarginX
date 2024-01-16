import React from "react";

const Card = () => {
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
          boxShadow: "0px 1px 6px #00000029",
          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/increase.png"
            alt="image"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p>
            Best price for your vehicle in 3 quick and easy steps. Select your
            vehicle, add your details and get the price!
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
          boxShadow: "0px 1px 6px #00000029",
          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/increase.png"
            alt="image"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p>
            Best price for your vehicle in 3 quick and easy steps. Select your
            vehicle, add your details and get the price!
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
          boxShadow: "0px 1px 6px #00000029",
          height: "auto",
          width: "auto",
          padding: "30px",
        }}
      >
        <div className="cardIcon">
          <img
            src="/assets/increase.png"
            alt="image"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p>
            Best price for your vehicle in 3 quick and easy steps. Select your
            vehicle, add your details and get the price!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
