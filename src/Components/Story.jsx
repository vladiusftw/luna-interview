import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../Styles/Story.css";
import { Stories } from "../Stories";

const Story = () => {
  return (
    <Box className="story-container">
      <Box className="story-left-container">
        <Box className="story-left-top-container">
          <Typography className="story-left-top-category" variant="p">
            {Stories.category}
          </Typography>
          <Box className="story-left-top-loc-container">
            <img
              className={"story-left-top-loc-icon"}
              src={require("../assets/pin.png")}
            />
            <Typography className="story-left-top-loc-text" variant="p">
              {Stories.location}
            </Typography>
          </Box>

          <Box className="story-left-top-date-container">
            <img
              className={"story-left-top-date-icon"}
              src={require("../assets/calendar.png")}
            />
            <Typography className="story-left-top-date-text" variant="p">
              {Stories.date}
            </Typography>
          </Box>
        </Box>

        <Typography className="story-left-title" variant="p">
          {Stories.title}
        </Typography>

        {Stories.content.split("\n").map((item, index) => {
          return (
            <Typography className="story-left-content" variant="p" key={index}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <img className="story-right-img" src={require("../assets/story.png")} />
    </Box>
  );
};

export default Story;
