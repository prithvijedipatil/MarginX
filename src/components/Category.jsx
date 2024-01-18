import React, { useState } from "react";
import { CircularProgress, Input, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import data from "../data.json";
import Search from "./Search";
import SearchModal from "./SearchModal";
import { useRef } from "react";
import { toast } from "react-toastify";

export const Category = ({ handleChange }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    console.log("button clicked", hiddenFileInput);
  };

  const handleFileChange = (event) => {
    toast.info("Success! We will get back to you soon", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const fileUploaded = event.target.files[0];
  };

  const categoryList = [
    {
      imgSrc: "http://surl.li/pibbs",
      categoryName: "Bathroom",
      categoryId: "Bathroom",
    },
    {
      imgSrc: "http://surl.li/pibve",
      categoryName: "Flooring",
      categoryId: "Flooring",
    },
    {
      imgSrc: "http://surl.li/pibwy",
      categoryName: "Plumbing",
      categoryId: "Plumbing",
    },
    {
      imgSrc: "http://surl.li/pibyg",
      categoryName: "Electrical",
      categoryId: "Electrical",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="heading"
          style={{ color: "#fefefe", marginTop: "60px", fontSize: "40px" }}
        >
          Get the right price estimation
        </h1>
        <Search />
        <div className="fileBanner">
          <p>Already have a quotation?</p>
          <label for="fileQuotation">
            <Button
              className="fileButton"
              sx={{
                backgroundColor: "white",
                color: "#086aa7",
                fontSize: "16px",
                fontWeight: "Bold",
              }}
              onClick={handleClick}
              variant="contained"
            >
              Upload now{" "}
              {loading ? (
                <CircularProgress
                  sx={{
                    height: "20px !important",
                    width: "20px !important",
                    marginLeft: "10px !important",
                  }}
                  color="inherit"
                />
              ) : (
                ""
              )}
            </Button>
            <Input
              type="file"
              accept="*"
              id="fileQuotation"
              sx={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleFileChange}
              hidden
            />
          </label>
        </div>
        <SearchModal />
        <div>
          <h2
            style={{ color: "#fefefe", marginTop: "30px", textAlign: "center" }}
          >
            <span className="or"> Select based on categories</span>
          </h2>
          <div
            className="categoryDiv"
            id="categoryDivId"
            style={{
              width: "auto",
              height: "auto",
              color: "grey",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",

              padding: "40px",
              flexWrap: "wrap",
              marginTop: "18px",
            }}
          >
            {categoryList.map((item) => (
              <Paper key={item.categoryId} elevation={3}>
                <Button
                  variant="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textTransform: "none",
                  }}
                  onClick={() => handleChange(item.categoryId)}
                >
                  <img
                    src={item.imgSrc}
                    style={{ width: "64px", height: "65px", display: "flex" }}
                    alt="bath"
                  />
                  <span
                    style={{
                      color: "#086AA7",
                      fontSize: "14px",
                      marginTop: "4px",
                    }}
                  >
                    {item.categoryName}
                  </span>
                </Button>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
