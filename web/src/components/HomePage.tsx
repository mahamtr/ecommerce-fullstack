import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Slider from "./Carrousel";
import ItemsSlider from "./RecommendedItems";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 0,
            pb: 6,
          }}
        >
          <Container maxWidth="sm"></Container>
        </Box>
        <Slider />

        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Fashion
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Your favourites designer wear at an affordable price.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>

        <Box p={5}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={4} sm={6}>
              <Card
                sx={{ minWidth: 200 }}
                style={{ position: "relative", width: "100%" }}
              >
                <CardMedia
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    height: "auto",
                    zIndex: "1",
                  }}
                  component="img"
                  height="200"
                  image="https://st.depositphotos.com/1001894/3115/i/600/depositphotos_31157709-stock-photo-hassan-ii-mosque-in-casablanca.jpg"
                  alt="work portfolio"
                />
                <Button
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  variant="contained"
                >
                  Get a Free Quote
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Card
                sx={{ minWidth: 200 }}
                style={{ position: "relative", width: "100%" }}
              >
                <CardMedia
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    height: "auto",
                    zIndex: "1",
                  }}
                  component="img"
                  height="200"
                  image="https://st.depositphotos.com/1001894/3115/i/600/depositphotos_31157709-stock-photo-hassan-ii-mosque-in-casablanca.jpg"
                  alt="work portfolio"
                />
                <Button
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  variant="contained"
                >
                  Get a Free Quote
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Card
                sx={{ minWidth: 200 }}
                style={{ position: "relative", width: "100%" }}
              >
                <CardMedia
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    height: "auto",
                    zIndex: "1",
                  }}
                  component="img"
                  height="200"
                  image="https://st.depositphotos.com/1001894/3115/i/600/depositphotos_31157709-stock-photo-hassan-ii-mosque-in-casablanca.jpg"
                  alt="work portfolio"
                />
                <Button
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  variant="contained"
                >
                  Get a Free Quote
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <ItemsSlider Title={"Recommended Items"} />
        <ItemsSlider Title={"Newly Arrived Items"} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
