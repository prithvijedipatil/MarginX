import React from "react";

const TestimonialCard = () => {
  return (
    <div
      className="testimonialContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        marginTop: "80px",
      }}
    >
      <div
        className="cardContainer"
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          boxShadow: "0px 1px 6px #00000029",
          padding: "40px 20px",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "start",

            justifyContent: "start",

            height: "auto",
            width: "auto",
            paddingLeft: "30px",
          }}
        >
          <div
            className="testimonialPictureAndName"
            style={{ display: "flex", gap: "30px" }}
          >
            <div className="cardIcon">
              <img
                src="/assets/increase.png"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "5px",
                }}
              />
            </div>
            <div
              className="cardText"
              style={{
                height: "auto",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "-1px",
                }}
              >
                Praful Raj
              </p>
              <p>Agra, UP</p>
            </div>
          </div>
        </div>
        <div
          className="testimonialText"
          style={{
            height: "auto",
            width: "300px",
            paddingLeft: "30px",
          }}
        >
          <p>
            "The PriceX makes it very easy to find out price for all the
            different vehicles and categories. I would recommend this to all who
            are into pre-owned vehicle business."
          </p>
        </div>
      </div>
      <div
        className="cardContainer"
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          boxShadow: "0px 1px 6px #00000029",
          padding: "40px 20px",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "start",

            justifyContent: "start",

            height: "auto",
            width: "auto",
            paddingLeft: "30px",
          }}
        >
          <div
            className="testimonialPictureAndName"
            style={{ display: "flex", gap: "30px" }}
          >
            <div className="cardIcon">
              <img
                src="/assets/increase.png"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "5px",
                }}
              />
            </div>
            <div
              className="cardText"
              style={{
                height: "auto",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "-1px",
                }}
              >
                Praful Raj
              </p>
              <p>Agra, UP</p>
            </div>
          </div>
        </div>
        <div
          className="testimonialText"
          style={{
            height: "auto",
            width: "300px",
            paddingLeft: "30px",
          }}
        >
          <p>
            "The PriceX makes it very easy to find out price for all the
            different vehicles and categories. I would recommend this to all who
            are into pre-owned vehicle business."
          </p>
        </div>
      </div>
      <div
        className="cardContainer"
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          boxShadow: "0px 1px 6px #00000029",
          padding: "40px 20px",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "start",

            justifyContent: "start",

            height: "auto",
            width: "auto",
            paddingLeft: "30px",
          }}
        >
          <div
            className="testimonialPictureAndName"
            style={{ display: "flex", gap: "30px" }}
          >
            <div className="cardIcon">
              <img
                src="/assets/increase.png"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "5px",
                }}
              />
            </div>
            <div
              className="cardText"
              style={{
                height: "auto",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "-1px",
                }}
              >
                Praful Raj
              </p>
              <p>Agra, UP</p>
            </div>
          </div>
        </div>
        <div
          className="testimonialText"
          style={{
            height: "auto",
            width: "300px",
            paddingLeft: "30px",
          }}
        >
          <p>
            "The PriceX makes it very easy to find out price for all the
            different vehicles and categories. I would recommend this to all who
            are into pre-owned vehicle business."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
