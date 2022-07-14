import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { NextPage as NP } from "next";
import styles from "../../styles/Logo.module.scss";
import { deepOrange } from "@mui/material/colors";

const Logo: NP = () => {
  return (
    <Box component="div" className={styles.init}>
      <Typography
        component="span"
        sx={{ color: "darkOrange" }}
        className={styles.firstletter}
      >
        L
      </Typography>
      <Typography component="span" className={styles.secondletter}>
        C<span className={styles.rofwords}>enter</span>
      </Typography>
    </Box>
  );
};

export default Logo;
