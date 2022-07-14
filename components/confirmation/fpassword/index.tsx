import * as React from "react";
import { NextPage as NP } from "next";
import {
  Card,
  Typography,
  Box,
  TextField,
  Grid,
  FormLabel,
  Button,
  Radio,
} from "@mui/material";
import {
  styled,
  alpha,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikErrors,
} from "formik";

const themeserif = createTheme({
  typography: {
    fontFamily: "serif",
  },
});

const themeColor = createTheme({});

interface FgpasswordProps {
  email: string;
  username: string;
}

interface FormValues {
  email: string;
  username: string;
}

const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: "70px",
  backgroundColor: "green",
}));

const CardContent = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
}));

const CardFooter = styled(Box)(({ theme }) => ({
  marginTop: 18,
  marginLeft: 1,
  marginRight: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "space-around",
}));

const Fgpassword: NP<FgpasswordProps> = ({ email, username }) => {
  return (
    <>
      <Box sx={{}}>
        <Card sx={{ height: 380 }}>
          <CardHeader>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ThemeProvider theme={themeserif}>
                <Typography
                  component="span"
                  sx={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  forgot password
                </Typography>
              </ThemeProvider>
              <Typography
                component="span"
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  lineHeight: "20px",
                  fontVariant: "small-caps",
                  fontSize: "1em",
                }}
              >
                enter sensitive information like filling those fields to help
                you recover your password
              </Typography>
            </Box>
          </CardHeader>
          <CardContent>
            <Box
              sx={{
                borderColor: `${grey[300]}`,
                borderStyle: "solid",
                borderWidth: 1,
                width: 400,
                height: 220,
              }}
            >
              <Box sx={{ pt: 1, pl: 1, pr: 1 }}>
                <Formik
                  initialValues={{ email: "", username: "" }}
                  validate={(values: FormValues) => {
                    const errors: FormikErrors<FormValues> = {};

                    if (!values.username) {
                      errors.username = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.username
                      )
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
                    handleBlur,
                    handleChange,
                    handleReset,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form>
                      <Box>
                        <Grid container xs={12} flexDirection="column">
                          <Grid item xs={12}>
                            <Box>
                              <FormLabel>enter your email</FormLabel>
                              <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="Romeusclarens10@gmail.com"
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <FormLabel>enter your username</FormLabel>
                              <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="RomeusClarens"
                              />
                            </Box>
                          </Grid>
                          <Grid>
                            <Box sx={{ pt: 1 }}>
                              <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                  bgcolor: "darkOrange",
                                  fontWeight: "bold",
                                  "&:hover": { bgcolor: "darkOrange" },
                                }}
                              >
                                recover your password
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </CardContent>
          <CardFooter>
            <Box>
              <Button
                variant="contained"
                sx={{ bgcolor: "green", "&:hover": { bgcolor: "green" } }}
              >
                <Radio
                  size="small"
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "darkOrange",
                    },
                  }}
                />
                <Typography
                  component="span"
                  sx={{ fontVariant: "smallcaps", fontFamily: "serif" }}
                >
                  email account
                </Typography>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ bgcolor: "green", "&:hover": { bgcolor: "green" } }}
              >
                <Radio
                  size="small"
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "darkOrange",
                    },
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontVariant: "smallcaps",
                    fontFamily: "serif",
                  }}
                >
                  phone number
                </Typography>
              </Button>
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Fgpassword;
