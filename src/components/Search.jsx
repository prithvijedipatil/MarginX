import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import searchData from "../searchData.json";
import RenderItem from "./RenderItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Search = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transitionDelay: "2s",
    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };
  const searchList = Object.keys(searchData);
  const [filteredData, setfilteredData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const inputref = useRef();

  const handleClose = () => setOpen(false);
  //   console.log("searchlist", searchList);

  const modalOpen = () => {
    setOpen(true);
    console.log(inputref);
    setfilteredData([]);
  };

  const handleSearch = (e) => {
    // e.preventDefault();

    console.log("open modal");

    let text = e.target.value;

    setfilteredData(
      searchList.filter((item) =>
        item.toLowerCase().trim().includes(text.toLowerCase())
      )
    );
    // console.log(filteredData, "filteredData");
  };

  return (
    <>
      <TextField
        placeholder="Search Product Prices"
        size="medium"
        InputProps={{ startAdornment: <SearchIcon /> }}
        className="searchBar"
        onClick={modalOpen}
      />
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          className="Modal"
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableRestoreFocus
        >
          <Box className="BoxModal" sx={style}>
            <TextField
              label="Search Products here"
              size="medium"
              InputProps={{ startAdornment: <SearchIcon /> }}
              className="searchBarModal"
              onChange={(e) => handleSearch(e)}
              helperText={filteredData.length ? "" : "Please start searching"}
              autoFocus
            />
            <div className="modalContainer">
              {filteredData.map((item, i) => (
                <Typography
                  className="searchResultModal"
                  key={i}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {item}{" "}
                  <span className="searchPrice">: ₹{searchData[item]}</span>
                </Typography>
              ))}
            </div>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Search;
