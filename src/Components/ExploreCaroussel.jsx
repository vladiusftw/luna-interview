import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stories } from "../Stories";
import Grid from "@mui/material/Grid";
import Arrows from "./Arrows";
import { useState } from "react";
import "../Styles/ExploreCaroussel.css";

const ExploreCaroussel = () => {
  const carousselRef = useRef(null);
  const [leftPressed, setLeftPressed] = useState(true);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([
    ...Stories.exploreStories.slice(counter, counter + 6),
  ]);

  const pressRight = () => {
    var temp = counter + 6;
    if (temp > Stories.exploreStories.length - 1) temp = 0;
    setData([...Stories.exploreStories.slice(temp, temp + 6)]);
    setCounter(temp);
  };

  const pressLeft = () => {
    var temp = counter - 6;
    if (temp < 0) temp = Stories.exploreStories.length - 6;
    setData([...Stories.exploreStories.slice(temp, temp + 6)]);
    setCounter(temp);
  };

  const Item = ({ item, index }) => {
    return (
      <Box className="explore-item-container">
        <img src={item.image} className="explore-item-img" />
        {index == 0 || index == 5 ? (
          <Box>
            <Typography className="explore-item-title" variant="p">
              {item.title}
            </Typography>
            <Box className="explore-item-icons-container">
              <Box className="explore-item-loc-container">
                <img
                  className="explore-item-loc-img"
                  src={require("../assets/pin.png")}
                />
                <Typography className="explore-item-loc-text" variant="p">
                  {item.location}
                </Typography>
              </Box>
              <Box className="explore-item-date-container">
                <img
                  className="explore-item-date-img"
                  src={require("../assets/calendar.png")}
                />
                <Typography className="explore-item-date-text" variant="p">
                  {item.date}
                </Typography>
              </Box>
            </Box>
            <Typography className="explore-item-content" variant="p">
              {item.content}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    );
  };
  return (
    <Box className="explore-container">
      <Arrows
        className="explore-arrows-small-container"
        pressRight={pressRight}
        pressLeft={pressLeft}
        leftPressed={leftPressed}
        setLeftPressed={setLeftPressed}
      />
      <Grid container columnSpacing={0} className="explore-grid">
        {data.map((item, index) => {
          return (
            <Grid
              item
              xs={index == 0 || index == 5 ? 12 : 6}
              md={index == 0 || index == 5 ? 6 : 3}
              key={index}
            >
              <Item item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Arrows
        className="explore-arrows-container"
        pressRight={pressRight}
        pressLeft={pressLeft}
        leftPressed={leftPressed}
        setLeftPressed={setLeftPressed}
      />
    </Box>
  );
};

export default ExploreCaroussel;
