import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";

const Slider = (props: any) => {
  var items = [
    {
      name: `Spring / Summer Collection ${new Date().getFullYear()}`,
      description: "Get free shipping on Order over 100€.",
      imageUrl: "/jackets.jpg",
    },
    {
      name: `Spring / Summer Collection ${new Date().getFullYear() - 1}`,
      description: "Get up to 40% Off on last summer collection.",
      imageUrl: "/jeans.jpg",
    },
    {
      name: `Fall / Winter Collection ${new Date().getFullYear()}`,
      description: "Get up to date with the new fashion!",
      imageUrl: "/glasses.jpg",
    },
  ];

  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible
      duration={1000}
      interval={10000}
      indicatorContainerProps={{
        style: {
          marginTop: "00px",
        },
      }}
    >
      {items.map((i) => (
        <Box
          component="img"
          sx={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={i.imageUrl}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
