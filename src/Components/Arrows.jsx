import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../Styles/Arrows.css";

const Arrows = (props) => {
  return (
    <Box className={props.className}>
      <Button
        variant="text"
        onClick={() => {
          if (props.pressLeft) props.pressLeft();
          else props.carousselRef.current.slickPrev();
          props.setLeftPressed(true);
        }}
      >
        <img
          className={
            props.leftPressed ? "featured-left-arrow" : "featured-right-arrow"
          }
          src={
            props.leftPressed
              ? require("../assets/left-arrow.png")
              : require("../assets/left-arrow-black.png")
          }
        />
      </Button>
      <Button
        variant="text"
        onClick={() => {
          if (props.pressRight) props.pressRight();
          else props.carousselRef.current.slickNext();
          props.setLeftPressed(false);
        }}
      >
        <img
          className={
            !props.leftPressed ? "featured-left-arrow" : "featured-right-arrow"
          }
          src={
            props.leftPressed
              ? require("../assets/right-arrow.png")
              : require("../assets/right-arrow-white.png")
          }
        />
      </Button>
    </Box>
  );
};

export default Arrows;
