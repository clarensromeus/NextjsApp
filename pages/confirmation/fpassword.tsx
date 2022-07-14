import React, { useCallback, useMemo, useRef } from "react";
import { NextPage as NP } from "next";
import Image from "next/image";
import { Container, Box, Typography } from "@mui/material";
import { Form } from "formik";
import { atom, selector } from "recoil";
import Fgpassword from "@/components/confirmation/fpassword/index";

interface FPprops<T, S> {
  email: string;
  username: string;
}

const FP: FPprops<string, number> = { email: "", username: "" };

const Fpassword: NP = () => {
  return (
    <>
      <div className="main">
        <Container component="div" sx={{ width: 500, pt: 10}}>
          <Box component="div">
            <Fgpassword {...FP} />
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Fpassword;
