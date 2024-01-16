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
        marginTop: "50px",
        flexWrap: "wrap",
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
            flexWrap: "wrap",
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
                src="/assets/mitchell-luo-ymo_yC_N_2o-unsplash.jpg"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "0",
                  objectFit: "cover",
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
                Ankit Bhala
              </p>
              <p>Delhi</p>
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
            "As an architect, this construction price estimation website has
            become my go-to tool. It saved me time on budget calculations and
            ensured transparency with clients. I highly recommend it for precise
            and efficient cost estimates."
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
                src="/assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "0",
                  objectFit: "cover",
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
                Madhu Siram
              </p>
              <p>Mumbai, MH</p>
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
            "MarginX revolutionized my cost estimation process. Its
            user-friendly interface and comprehensive data help me submit
            competitive bids, securing more contracts. A game-changer for
            construction professionals – highly recommended."
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
                src="/assets/kunal-goswami-5DYuCuFgJBs-unsplash.jpg"
                alt="image"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50px",
                  boxShadow: "0px 1px 6px #00000029 ",
                  backgroundColor: "white",
                  paddingLeft: "0",
                  objectFit: "cover",
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
                Ritesh Shankar
              </p>
              <p>Bangalore, KA</p>
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
            "During my home renovation, this website provided clear and accurate
            cost estimates. It empowered me to negotiate better deals and avoid
            surprises. A fantastic tool for homeowners – I'd recommend it for
            informed construction decisions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
