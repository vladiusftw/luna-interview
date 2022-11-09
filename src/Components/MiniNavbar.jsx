import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../Styles/MiniNavbar.css";

const MiniNavbar = (props) => {
  return (
    <Box
      className="mini-navbar-container"
      sx={{
        transform: props.openMenu ? "translateX(0%)" : "translateX(100%)",
      }}
    >
      <Box className="mini-navbar-items-container">
        <Typography className="mini-navbar-item" variant="p">
          {"Blockchain"}
        </Typography>

        <Typography className="mini-navbar-item" variant="p">
          {"Crypto Currency"}
        </Typography>

        <Typography className="mini-navbar-item" variant="p">
          {"NFT"}
        </Typography>

        <Typography className="mini-navbar-item" variant="p">
          {"Metaverse"}
        </Typography>

        <Typography className="mini-navbar-item" variant="p">
          {"Education"}
        </Typography>
      </Box>
    </Box>
  );
};

export default MiniNavbar;
