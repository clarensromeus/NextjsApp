import * as React from "react";
import { NextPage as NP } from "next";
import { Box, Typography } from "@mui/material";

const AppLogo: NP = () => {
  return (
    <div>
      <Box sx={{ flexDirection: "row" }}>
        <Typography
          component="span"
          fontSize="2em"
          fontFamily="roboto"
          fontWeight="bold"
          sx={{ color: "green" }}
        >
          L
        </Typography>
        <Typography
          component="span"
          fontSize="2em"
          fontFamily="roboto"
          fontWeight="bold"
          sx={{ color: "blue" }}
        >
          C
        </Typography>
        <Typography component="span" fontWeight="bold">
          enter
        </Typography>
      </Box>
    </div>
  );
};

export default AppLogo;
