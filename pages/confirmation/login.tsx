//dynamic internal imports
import React, { useCallback, useMemo, useRef } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { NextPage as NP } from "next";
import { styled, alpha } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";
import styles from "../../styles/Login.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Container,
  Box,
  Typography,
  Switch,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { atom, selector } from "recoil";
import { grey, green, orange, blue } from "@mui/material/colors";
//dynamic external imports
import {} from "@/components/confirmation/log_In/index";
import Logo from "@/components/logo/index";
import Validate from "@/components/confirmation/log_In/validate";

const LogIn: NP = () => {
  const validateProps = {
    username: "romeusclarens91@gmail.com",
    password: 1998,
  };

  return (
    <>
      <div className={styles.init}>
        <Logo />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "5rem",
            //border: "1px solid black",
          }}
        >
          <Box component="div" className={styles.center}>
            <Box sx={{}} component="span" className={styles.login}>
              Login with Lcenter
            </Box>
            <Box sx={{ color: `${grey[900]}` }}>
              and try your best as our confidential client to securely enter
              personel informations
            </Box>
            <Box component="div" sx={{ color: `${grey[900]}` }}>
              and get a better user's authentification
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              alignItems: "flexStart",
              paddingTop: "14px",
              width: "260px",
            }}
          >
            <Validate {...validateProps} />
            <Box
              component="div"
              sx={{
                pl: "70px",
                pt: "3px",
                display: "flex",
              }}
            >
              <Typography component="span" fontWeight="bold" fontSize="0.7rem">
                don't have an account?
                <Typography
                  component="span"
                  fontWeight="bold"
                  fontSize="0.7rem"
                  sx={{ color: `${orange[600]}` }}
                >
                  register
                </Typography>
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                pt: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::before, &::after": {
                  content: '""',
                  position: "relative",
                  top: "0%",
                  left: "0%",
                  borderTop: 1,
                  display: "flex",
                  alignSelf: "center",
                  width: "100px",
                },
              }}
            >
              <Box component="div">oR</Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                pt: "12px",
              }}
            >
              <Box
                component="div"
                sx={{
                  border: 1,
                  borderColor: "blue",
                  borderStyle: "solid",
                  width: "46%",
                  bgcolor: "blue",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "blue",
                    borderRadius: "0%",
                    "&:hover": {
                      bgcolor: "blue",
                    },
                  }}
                  startIcon={<FacebookIcon />}
                >
                  Facebook
                </Button>
              </Box>
              <Box
                component="div"
                sx={{
                  width: "46%",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "red",
                    borderRadius: "0%",
                    "&:hover": {
                      bgcolor: "red",
                    },
                  }}
                  startIcon={<GoogleIcon />}
                >
                  Google
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LogIn;
