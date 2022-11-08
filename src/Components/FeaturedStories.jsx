import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stories } from "../Stories";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/FeaturedStories.css";
import { useRef } from "react";

const FeaturedStories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
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

  const carousselRef = useRef(null);

  const Item = ({ item }) => {
    return (
      <Box className="featured-item-container">
        <img className="featured-item-img" src={item.image} />
        <Typography className="featured-item-title" variant="p">
          {item.title}
        </Typography>
        <Box className="featured-item-icons-container">
          <Box className="featured-item-loc-container">
            <img
              className="featured-item-loc-img"
              src={require("../assets/pin.png")}
            />
            <Typography className="featured-item-loc-text" variant="p">
              {item.location}
            </Typography>
          </Box>
          <Box className="featured-item-date-container">
            <img
              className="featured-item-date-img"
              src={require("../assets/calendar.png")}
            />
            <Typography className="featured-item-date-text" variant="p">
              {item.date}
            </Typography>
          </Box>
        </Box>
        <Typography className="featured-item-content" variant="p">
          {item.content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box className="featured-container">
      <Box className="featured-left-container">
        <Typography className="featured-left-title" variant="p">
          {"featured stories on luna times"}
        </Typography>
        <Typography className="featured-left-content" variant="p">
          {
            "Cursus fames vel donec amet. Varius ultrices ac malesuada lacinia proin. Lectus malesuada tempus neque nibh."
          }
        </Typography>
        <Box className="featured-arrows-container">
          <Button
            variant="text"
            onClick={() => carousselRef.current.slickPrev()}
          >
            <img
              className="featured-left-arrow"
              src={require("../assets/left-arrow.png")}
            />
          </Button>
          <Button
            variant="text"
            onClick={() => carousselRef.current.slickNext()}
          >
            <img
              className="featured-right-arrow"
              src={require("../assets/right-arrow.png")}
            />
          </Button>
        </Box>
      </Box>
      <Carousel
        className="featured-right-container"
        {...settings}
        ref={carousselRef}
      >
        {Stories.featuredStories.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </Carousel>
    </Box>
  );
};

export default FeaturedStories;
