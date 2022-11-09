import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HamburgerIcon } from "react-hamburger-icon";
import "../Styles/Navbar.css";

const Navbar = (props) => {
  return (
    <Box className="navbar-container">
      <Typography className="navbar-logo" variant="p">
        {"explore"}
      </Typography>
      <Box className="navbar-right-container">
        <Typography className="navbar-item" variant="p">
          {"Blockchain"}
        </Typography>
        <Typography className="navbar-item" variant="p">
          {"Crypto Currency"}
        </Typography>
        <Typography className="navbar-item" variant="p">
          {"NFT"}
        </Typography>
        <Typography className="navbar-item" variant="p">
          {"Metaverse"}
        </Typography>
        <Typography className="navbar-item" variant="p">
          {"Education"}
        </Typography>
      </Box>
      <HamburgerIcon
        open={props.openMenu}
        onClick={() => props.setOpenMenu((val) => !val)}
        className="small-menu"
      />
    </Box>
  );
};

export default Navbar;
