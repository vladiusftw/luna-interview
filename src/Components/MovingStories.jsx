import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stories } from "../Stories";
import "../Styles/MovingStories.css";

const MovingStories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Item = ({ item }) => {
    return (
      <Box className="stories-item-container">
        <img className="stories-item-left" src={item.image} />
        <Box className="stories-item-right">
          <Typography className="stories-item-right-title" variant="p">
            {item.title}
          </Typography>
          <Box className="stories-item-right-date-container">
            <img
              className="stories-item-right-date-img"
              src={require("../assets/calendar.png")}
            />
            <Typography className="stories-item-right-date-text" variant="p">
              {item.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Carousel className="stories-container" {...settings}>
      {Stories.stories.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </Carousel>
  );
};

export default MovingStories;
