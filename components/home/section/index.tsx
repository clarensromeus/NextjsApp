import * as React from "react";
import { NextPage as NP } from "next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import _ from "lodash";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Button,
  Badge,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import InputAdornment from "@mui/material/InputAdornment";
import { orange } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputFriends } from "@/components/home/customization/index";

interface friends {
  name: string;
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#33691e",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

const friends = [
  {
    img: "/images/static/nicki1.jpeg",
    name: "nickiminaj",
    state: "artist & entrepreneur",
  },
  {
    img: "/images/static/wendyyking1.jpg",
    name: "@wendyytraka",
    state: "chinwaaa Gang",
  },
  {
    img: "/images/static/lilwayne1.jpg",
    name: "lilwayne",
    state: "american artist",
  },
  {
    img: "/images/static/wiclef1.jpeg",
    name: "wiclef jean",
    state: "haitien artist",
  },
];

const Request = [
  {
    img: "/images/static/rickross1.jpg",
    name: "rap rickross",
    state: "@cashmoney",
  },
  {
    img: "/images/static/cardib1.jpg",
    name: "cardi-b girl...",
    state: "cardi-b girl",
  },
  {
    img: "/images/static/fantom.jpg",
    name: "fantom",
    state: "@onorabfantom",
  },
  {
    img: "/images/static/jordan walk.jpeg",
    name: "jordan walk",
    state: "@apple owner",
  },
];

const Friends: NP<friends> = ({ name }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const students = _.drop([12, 2, 4, 5], 2);
  console.log(students);

  return (
    <>
      <Box
        sx={{
          width: 260,
          borderColor: `${grey[300]}`,
          borderWidth: 1,
          borderStyle: "solid",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            px: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Box pt={1}>
            <Typography
              fontFamily="roboto"
              fontSize="0.9em"
              sx={{ textTransform: "capitalize" }}
            >
              sugested friends
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <AutoFixHighIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          pt={1}
          px={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            width: 260,
            bgcolor: "darkOrange",
          }}
        >
          <Box mb={1}>
            <SearchInputFriends
              size="small"
              fullWidth
              placeholder="Search friends..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box>
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{ p: 0 }}
              aria-label="basic tabs example"
            >
              <Tab
                disableRipple
                label={
                  <Typography sx={{ textTransform: "lowercase" }}>
                    famous
                  </Typography>
                }
              />
              <Tab
                disableRipple
                label={
                  <Typography sx={{ textTransform: "lowercase" }}>
                    ordi
                  </Typography>
                }
              />
              <Tab
                disableRipple
                label={
                  <Typography sx={{ textTransform: "lowercase" }}>
                    general
                  </Typography>
                }
              />
            </Tabs>
          </ThemeProvider>
        </Box>
        <Box>
          <List>
            {friends.map((val, ind) => {
              const { img, name, state } = val;
              console.log(name);

              return (
                <ListItem key={ind}>
                  <ListItemIcon>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar alt={name} src={img} />
                    </StyledBadge>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize="0.7em" fontWeight="bold">
                        {name}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        fontSize="0.7em"
                        sx={{ color: `${grey[600]}` }}
                      >
                        {state}
                      </Typography>
                    }
                  />
                  <Box>
                    <Button variant="outlined">
                      <Typography fontSize="0.8em" fontWeight="bold">
                        follow
                      </Typography>
                    </Button>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
      <Box pt={1}>Request</Box>
      <Box
        sx={{
          pt: 1,
          borderColor: `${grey[300]}`,
          borderWidth: 1,
          borderStyle: "solid",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          bgcolor: "white",
        }}
      >
        <List>
          {Request.map((val, ind) => {
            const { img, name, state } = val;
            return (
              <ListItem key={ind}>
                <ListItemAvatar>
                  <Avatar alt={name} src={img} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontSize="0.7em" fontWeight="bold">
                      {name}
                    </Typography>
                  }
                  secondary={
                    <Typography fontSize="0.7em" sx={{ color: `${grey[600]}` }}>
                      {state}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default Friends;
