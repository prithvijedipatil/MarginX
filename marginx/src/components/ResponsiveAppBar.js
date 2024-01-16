import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About Us", "contact Us"];
const settings = ["Home", "About Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "white", color: "#086AA7" }}
      position="static"
      id="home"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#086AA7",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            Margin
            <img
              style={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "auto",
                height: "50px",
                marginLeft: "-30px",
              }}
              src="/assets/logo.png"
              alt="logo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#086AA7"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#086AA7",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            MarginX
            <img
              style={{
                display: { xs: "flex", md: "none" },

                width: "auto",
                height: "30px",
              }}
              src="/assets/logo.png"
              alt="logo"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              gap: "20px",
            }}
          >
            <Button
              href="#home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#086AA7", display: "block" }}
            >
              <span style={{ fontWeight: "bold" }}>Home</span>
            </Button>
            <Button
              href="#about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#086AA7", display: "block" }}
            >
              <span style={{ fontWeight: "bold" }}>About</span>
            </Button>
            <Button
              href="#contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#086AA7", display: "block" }}
            >
              <span style={{ fontWeight: "bold" }}>Contact</span>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
