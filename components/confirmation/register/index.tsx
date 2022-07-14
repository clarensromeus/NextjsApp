import { NextPage as NP } from "next";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import * as yup_ from "yup";
import { atom, useRecoilState, selector } from "recoil";
import {
  Box,
  TextField,
  Checkbox,
  Select,
  Paper,
  Card,
  Typography,
  Grid,
  checkBox,
  Button,
} from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import { text } from "@/components/confirmation/log_In/index";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface saveStudents {
  username: string;
  password: string;
}

const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "green",
  height: "80px",
}));

const CardContent = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  marginLeft: "8px",
}));

interface userAge {
  year: string;
  month: string;
  day: string;
}

const Register: NP = (props) => {
  const users = atom({
    key: "users",
    default: [{ year: "", month: "", day: "" }] as Array<userAge>,
  });

  const handleclick = (event: React.MouseEvent<HTMLFormElement>) => {
    console.log(`we just have a click: ${event}`);
  };

  const HandleFormClick = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(`we submit our form as ${event}`);
  };

  const HandleInputForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(`the value of the field is : ${value}`);
  };

  const [date, setdate] = useRecoilState(users);

  return (
    <>
      <Box>
        <Card sx={{ width: "300px", height: "560px" }}>
          <CardHeader>
            <Box>
              <Typography
                fontWeight="bold"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                register
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="bold" sx={{ color: "white" }}>
                with LCenter
              </Typography>
            </Box>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              validate={(values: saveStudents) => {
                const errors: FormikErrors<saveStudents> = {};

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
                isSubmitting,
                handleSubmit,
                handleBlur,
                handleChange,
                handleReset,
              }) => (
                <Form>
                  <Box>
                    <Grid container xs={12} spacing={1}>
                      <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                          <Box>
                            <Field
                              name="firstname"
                              as={text}
                              type="text"
                              size="small"
                              placeholder="Firstname"
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
                        <Grid item xs={6}>
                          <Box>
                            <Field
                              name="lastname"
                              as={text}
                              type="text"
                              size="small"
                              placeholder="Lastname"
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
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Field
                            name="enter your email"
                            as={text}
                            type="text"
                            size="small"
                            placeholder="Enter your email"
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <FormControl>
                            <FormLabel
                              sx={{ color: "dark" }}
                              id="demo-row-radio-buttons-group-label"
                            >
                              Gender
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                              />
                              <FormControlLabel
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Field
                            name="password"
                            as={text}
                            type="password"
                            size="small"
                            placeholder="Enter your password"
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <VisibilityOff
                                    sx={{
                                      fontSize: "1em",
                                      color: "darkOrange",
                                    }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Field
                            name="passwconfirmation"
                            as={text}
                            type="password"
                            size="small"
                            placeholder="Confirm your password"
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <FormControl
                            sx={{ mr: 1, minWidth: 90 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small">Year</InputLabel>
                            <Select
                              labelId="demo-select-small"
                              id="demo-select-small"
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>2022</MenuItem>
                              <MenuItem value={20}>2021</MenuItem>
                              <MenuItem value={30}>2020</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            sx={{ mr: 1, minWidth: 96 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small">
                              Month
                            </InputLabel>
                            <Select
                              labelId="demo-select-small"
                              id="demo-select-small"
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>January</MenuItem>
                              <MenuItem value={20}>Febuary</MenuItem>
                              <MenuItem value={30}>March</MenuItem>
                              <MenuItem value={40}>April</MenuItem>
                              <MenuItem value={50}>May</MenuItem>
                              <MenuItem value={60}>september</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl sx={{ minWidth: 80 }} size="small">
                            <InputLabel id="demo-select-small">Day</InputLabel>
                            <Select
                              labelId="demo-select-small"
                              id="demo-select-small"
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>1</MenuItem>
                              <MenuItem value={20}>2</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box>
                          <FormControl
                            sx={{ mr: 1, minWidth: 282 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small">
                              Select a country
                            </InputLabel>
                            <Select
                              labelId="demo-select-small"
                              id="demo-select-small"
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Japan</MenuItem>
                              <MenuItem value={20}>Usa</MenuItem>
                              <MenuItem value={30}>Canada</MenuItem>
                              <MenuItem value={40}>Haiti</MenuItem>
                              <MenuItem value={50}>
                                dominicain republic
                              </MenuItem>
                              <MenuItem value={60}>England</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "center",
                            flexDirection: "row",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7em",
                              fontWeight: "bold",
                              marginRight: "1px",
                              marginTop: "-10px",
                              padding: "0px",
                            }}
                          >
                            by checking you confirm that you have no problem and
                            agree with our privacy rules
                          </span>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{
                              color: "white",
                              bgcolor: "green",
                              borderRadius: "0%",
                              "&:hover": {
                                bgcolor: "green",
                              },
                            }}
                          >
                            Register
                          </Button>
                        </Box>
                        <Box sx={{}}>
                          <Typography
                            fontSize="0.7em"
                            fontWeight="bold"
                            sx={{ textAlign: "end" }}
                            gutterBottom
                          >
                            already have an account?
                            <span style={{ color: "darkOrange" }}>Login</span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Register;
