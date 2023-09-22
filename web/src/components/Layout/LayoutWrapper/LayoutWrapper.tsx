import React, { ComponentType, ReactNode } from "react";
import "./LayoutWrapper.css";
import { Route } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme } from "@mui/material";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}
const defaultTheme = createTheme();

function LayoutWrapper({ children, ...rest }: LayoutWrapperProps) {
  return (
    <div className="LayoutWrapper">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <NavBar />
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 0,
              pb: 10,
            }}
          />
          <Container sx={{ minHeight: "calc(100vh - 70px)" }}>
            {children}
          </Container>
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default LayoutWrapper;
