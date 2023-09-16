import React from "react";
import "./CopyRight.css";
import { Link, Typography } from "@mui/material";

interface CopyRightProps {}

function CopyRight() {
  return (
    <div className="CopyRight">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          ShoesX
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>{" "}
    </div>
  );
}

export default CopyRight;
