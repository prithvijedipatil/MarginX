import React from "react";

const RenderItem = ({ name, price }) => {
  return (
    <>
      <div className="searchResult">
        <h4>{name}</h4>

        <h3> ₹ {price}</h3>
      </div>
    </>
  );
};

export default RenderItem;
