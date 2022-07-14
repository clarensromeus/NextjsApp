import * as React from "react";
import { NextPage as NP } from "next";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import styles from "../styles/Error404.module.scss";

const Error404: NP = () => {
  return (
    <div className={styles.init}>
      <Box component="div" sx={{}} className={styles.main}>
        <Typography
          component="span"
          sx={{ color: `${red[700]}`, fontSize: "2em" }}
        >
          Ouuchh, sorry you type a bad-linked url!
        </Typography>
        <Typography component="h1" className={styles.error}>
          please retry with more accuracy and make sure you commit no mistake
        </Typography>
      </Box>
    </div>
  );
};

export default Error404;
