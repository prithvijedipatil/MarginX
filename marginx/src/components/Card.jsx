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
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
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
            src="/assets/workflow.png"
            alt="image"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p>
            Get the best market rate estimation in few steps. Select product or
            upload quotation.
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
            Scientific & Insightful approach towards price discovery. Hard work
            and intelligence put together!
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
            src="/assets/ai.png"
            alt="image"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="cardText" style={{ height: "auto", width: "200px" }}>
          <p>
            Data driven results by providing exclusive access to all prodcut
            prices over the past decade!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
