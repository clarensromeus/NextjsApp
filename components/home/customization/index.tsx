import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const CssTextField = styled(TextField)({
  "& .MuiInput-underline:after": {},
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: 20,
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderWidth: 0,
      borderRadius: 20,
      color: "white",
    },
  },
});

const SearchInputFriends = styled(TextField)({
  "& .MuiInput-underline:after": {},
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: 20,
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderWidth: 0,
      borderRadius: 20,
      color: "white",
    },
  },
});

export { CssTextField as SearchInput, SearchInputFriends };
