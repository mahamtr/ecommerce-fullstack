import React from "react";
import "./ItemDetail.css";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface ItemDetailProps {}

function ItemDetail() {
  return (
    <div className="ItemDetail">
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>image</Box>
          </Grid>
          <Grid container xs={8}>
            <Grid xs={12}>
              <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
                company name
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>item name</Box>
            </Grid>

            <Grid xs={12}>
              <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
                item description
              </Box>
            </Grid>

            <Grid xs={12}>
              <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
                item price and discount
              </Box>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
              image carrousel
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
              quantity selection and add to cart
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ItemDetail;
