import React, { useCallback, useMemo, useRef } from "react";
import { NextPage as NP } from "next";
import Image from "next/image";
import styles from "../../styles/Register.module.scss";
import Register from "@/components/confirmation/register/index";
import {
  Container,
  Box,
  Typography,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Form } from "formik";
import { atom, selector } from "recoil";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
//for the registration
//@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,400;1,500&family=Permanent+Marker&display=swap');
//font-family: 'Josefin Sans', sans-ser
//for the welcome
//@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap');
//font-family: 'Zilla Slab', serif;

const register: NP = () => {
  return (
    <>
      <div>
        <Container>
          <Box
            component="div"
            sx={{
              pl: "170px",
              pt: "70px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ width: "340px" }}>
              <Box>
                <Typography fontWeight="bold" fontSize="1.5em">
                  Welcome to our compagny
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize="1em"
                  sx={{
                    fontVariant: "small-caps",
                    textTransform: "lowercase",
                  }}
                >
                  below is a quick introduction on how we help poeple to benefit
                  from our firm
                </Typography>
              </Box>
              <Box sx={{ pt: "5px" }}>
                <Typography
                  sx={{ color: `${orange[800]}`, fontVariant: "small-caps" }}
                  fontSize="1em"
                >
                  {" "}
                  we are a group of people thinking for the best advanced and
                  shiny side of the society where all poeple are evolving in the
                  world and always do our best to tickle our customer's fancy.
                </Typography>
              </Box>
              <Box sx={{ pt: "5px" }}>
                <Typography fontWeight="bold">
                  {" "}
                  see some of our trusted clients
                </Typography>
              </Box>
              <Box sx={{ pt: "5px" }}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box
                      sx={{
                        alignSelf: "center",
                        transform: "rotate(182deg)",
                        pt: "10px",
                      }}
                    >
                      <DoubleArrowIcon />
                    </Box>
                    <Avatar
                      sx={{ width: 52, height: 52 }}
                      alt="jordan walk"
                      src="/images/static/jeffbezos.jpeg"
                    />
                  </Box>
                  <Box>
                    <Avatar
                      sx={{ width: 52, height: 52 }}
                      alt="mark zuckerberg"
                      src="/images/static/mark zuckerberg.jpeg"
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Avatar
                      sx={{ width: 52, height: 52 }}
                      alt="jeff bezos"
                      src="/images/static/jordan walk.jpeg"
                    />
                    <Box sx={{ alignSelf: "center" }}>
                      <DoubleArrowIcon />
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ pt: 1 }}>
                <Typography fontWeight="bold">register with</Typography>
              </Box>
              <Box>
                <Typography>
                  {" "}
                  if you already have an account please skip this part over
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  pt: 2,
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: "0%",
                      fontWeight: "bold",
                      color: "blue",
                      borderColor: "blue",
                      "&:hover": {
                        bgcolor: "white",
                        borderColor: "blue",
                      },
                    }}
                  >
                    register with facebook
                  </Button>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: "0%",
                      fontWeight: "bold",
                      color: "red",
                      borderColor: "red",
                      "&:hover": {
                        bgcolor: "white",
                        borderColor: "red",
                      },
                    }}
                  >
                    register with google
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ pl: 12, maxWidth: "300px" }}>
              <Register />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default register;
