import * as React from "react";
import { NextPage as NP } from "next";
import { Box, TextField, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import { SearchInput } from "@/components/home/customization/index";
import InputAdornement from "@mui/material/InputAdornment";

const SearchBarInput: NP = (props) => {
  return (
    <>
      <Box>
        <Stack direction="row" spacing={0}>
          <Box sx={{ position: "relative", left: 40, zIndex: "2" }}>
            <Avatar sx={{ bgcolor: "green", width: 50, height: 50 }}>
              <YoutubeSearchedForIcon sx={{ color: "white" }} />
            </Avatar>
          </Box>
          <Box
            sx={{
              mt: "6px",
              zIndex: "1",
              width: 188,
            }}
          >
            <SearchInput
              id="SearchBarInput"
              variant="outlined"
              size="small"
              placeholder="Search for....."
              InputProps={{
                startAdornment: (
                  <InputAdornement position="start">kgl</InputAdornement>
                ),
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SearchBarInput;
