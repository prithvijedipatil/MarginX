import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import {
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Grid,
  FormHelperText,
  CircularProgress,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import Category from "./Category";
import data from "../data.json";

const MarginForm = () => {
  const [cat, setCat] = useState(null);
  const [cat2options, setcat2options] = useState([]);
  const [cat2, setCat2] = useState("");
  const [cat3options, setcat3options] = useState([]);
  const [cat3, setCat3] = useState("");
  const [cat4options, setcat4options] = useState([]);
  const [cat4, setCat4] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
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
  let x = 0;

  const modalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleCatSelect = (id) => {
    setCat(id);
    setCat2(null);
    setCat3(null);
    setCat4(null);
    console.log("id", id);
    setcat2options(Object.keys(data[id]));
    const element = document.getElementById("categoryDivId");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCat2Change = (e) => {
    setCat2(e.target.value);
    setCat3(null);
    setCat4(null);
    setcat3options(Object.keys(data[cat][e.target.value]));
    console.log(e.target.value, "value");
  };

  const handleCat3Change = (e) => {
    setCat3(e.target.value);

    setCat4(null);
    setcat4options(Object.keys(data[cat][cat2][e.target.value]));
  };

  const handleCat4Change = (e) => {
    setCat4(e.target.value);
  };

  const getResult = () => {
    x = data[cat][cat2][cat3][cat4];
    setLoading(true);
    setResult(x);

    setTimeout(() => {
      setLoading(false);
      modalOpen();
    }, 1000);
  };

  return (
    <>
      <Category handleChange={handleCatSelect} />
      <Collapse id="collapse" in={!!cat}>
        <div
          className="collapseDiv"
          style={{
            width: "auto",
            height: "auto",
            color: "grey",
            marginTop: "1rem",
            padding: "20px",
          }}
        >
          <Grid container gap={2} justifyContent={"space-around"}>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Sub-Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={cat2}
                  label="Sub-Categories"
                  onChange={handleCat2Change}
                >
                  {console.log("cat2options", cat2options)}
                  {cat2options.map((item) => (
                    <MenuItem key={Date.now()} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* cat2 */}
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label2">
                  Brands
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label2"
                  id="demo-simple-select-helper"
                  value={cat3}
                  label="Brands"
                  onChange={handleCat3Change}
                  disabled={!cat2}
                >
                  {console.log("cat3options", cat3options)}
                  {cat3options.map((item) => (
                    <MenuItem key={Date.now()} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                {cat2 ? (
                  ""
                ) : (
                  <FormHelperText>Please select Category</FormHelperText>
                )}
              </FormControl>
            </Grid>
            {/* cat3 */}
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label3">
                  Products
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label3"
                  id="demo-simple-select-helper"
                  value={cat4}
                  label="Products"
                  onChange={handleCat4Change}
                  disabled={!cat3}
                >
                  {console.log("cat4options", cat4options)}
                  {cat4options.map((item) => (
                    <MenuItem key={Date.now()} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                {cat3 ? (
                  ""
                ) : (
                  <FormHelperText>Please select brand</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundColor: "white",
          }}
        >
          <Button
            variant="contained"
            disabled={!cat4 || loading}
            onClick={() => getResult()}
            sx={{
              backgroundColor: "#086aa7",
              color: "#fffff",
            }}
          >
            Estimate Now{" "}
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
        </div>
      </Collapse>

      <Modal
        open={open}
        className="Modal"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableRestoreFocus
      >
        <Box className="BoxModal" sx={style}>
          <div className="modalContainer">
            <Typography
              className="searchResultModal"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {/* price display here */}
              <h4 style={{ marginTop: "-10px" }}>
                This should cost you in the range
              </h4>
              <span
                style={{
                  color: "#086aa7",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginRight: "50px",
                  display: "block",
                }}
              >
                ₹ {result}
              </span>
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default MarginForm;
