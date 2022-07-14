import * as React from "react";
import { NextPage as NP } from "next";
import head from "next/head";
import {
  Button,
  Switch,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { grey, green } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { atom, useRecoilState, selector, useSetRecoilState } from "recoil";
import {
  text,
  passw,
  And12Switch,
} from "@/components/confirmation/log_In/index";
import {
  Form,
  Formik,
  Field,
  ErrorMessage,
  FormikProps,
  FormikErrors,
} from "formik";
import * as yup from "yup";

interface Props {
  username: string;
  password: number;
}

interface FormValues {
  username: string;
  password: string;
}

interface State {
  showps: boolean;
}

const Validate: NP<Props> = ({ username, password }) => {
  const showPassword = atom({
    key: "showpassword",
    default: false as boolean,
  });

  const showpassw = selector({
    key: "showpass",
    get: ({ get }) => {
      const res = get(showPassword);
      return {
        passw: !res,
      };
    },
  });

  //const handleShowPassword = () => {};

  return (
    <>
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: FormikErrors<FormValues> = {};

            if (!values.username) {
              errors.username = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = "Invalid email address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            isSubmitting,
            handleSubmit,
            handleBlur,
            handleChange,
            handleReset,
          }) => (
            <Form>
              <Box>
                <Grid container xs={12} columnSpacing={2} spacing={1}>
                  <Grid container item>
                    <FormLabel>
                      <Typography
                        fontWeight="bold"
                        sx={{ fontSize: "0.9rem", color: `${grey[600]}` }}
                      >
                        enter your username
                      </Typography>
                    </FormLabel>
                    <Box>
                      <Field
                        name="username"
                        as={text}
                        type="text"
                        size="small"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <FormLabel>
                      <Typography
                        fontWeight="bold"
                        sx={{ fontSize: "0.9rem", color: `${grey[600]}` }}
                      >
                        enter your username
                      </Typography>
                    </FormLabel>
                    <Box>
                      <Field
                        name="password"
                        as={passw}
                        type="password"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{ cursor: "pointer" }}
                            >
                              <VisibilityOff />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<And12Switch color="success" />}
                      label={
                        <Typography
                          component="span"
                          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                        >
                          keep yourself login
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          borderRadius: "0%",
                          boxShadow: 8,
                          bgcolor: `${green[900]}`,
                          "&:hover": {
                            bgcolor: `${green[900]}`,
                          },
                        }}
                      >
                        <Typography
                          fontSize="1.1rem"
                          fontWeight="bold"
                          sx={{
                            textTransform: "capitalize",
                            color: "white",
                          }}
                        >
                          login
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Validate;
