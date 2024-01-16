import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      const footer = document.getElementsByClassName("formFooter");
      console.log("foooter", footer);
    }, 5000);
  }, []);
  return (
    <div>
      <iframe
        id="JotFormIFrame-240154359064050"
        title="Contact Us"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/240154359064050"
        frameborder="0"
        className="iframe"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
      >
        {" "}
      </iframe>
    </div>
  );
};

export default Contact;
