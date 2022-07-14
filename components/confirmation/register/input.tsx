import * as React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
    borderWidth: "1px",
  },
  "& .MuiInput-underline:after": {},
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "background.default",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "black",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: "1px",
    },
  },
});

export { CssTextField as text };
