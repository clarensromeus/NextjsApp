import * as React from "react";
//here below have only external imports calls
import { NextPage as NP } from "next";
import {
  Box,
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemAvatar,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tabs from "@mui/material/Tabs";
import { grey, orange, green, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
//here have only internal imports call
import SearchBarInput from "@/components/home/header/SearchBar";
import Friends from "@/components/home/section/index";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PersonIcon from "@mui/icons-material/Person";

interface HeaderBarProps {
  name: string;
}

interface Info {
  icon: React.ElementType;
  text: string;
}
[];

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
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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

const listInfo = [
  {
    icon: <HomeIcon />,
    text: "Home",
    index: 0,
  },
  {
    icon: <InfoIcon />,
    text: "About",
    index: 1,
  },
  {
    icon: <PeopleIcon />,
    text: "friends",
    index: 2,
  },
  {
    icon: <BookmarksIcon />,
    text: "Bookmarks",
    index: 3,
  },
  {
    icon: <NotificationsIcon />,
    text: "Notifications",
    index: 4,
  },
  {
    icon: <GroupsIcon />,
    text: "Groups",
    index: 5,
  },
  {
    icon: <ChatIcon />,
    text: "Chat",
    index: 6,
  },
  {
    icon: <LiveTvIcon />,
    text: "Live",
    index: 7,
  },
];

const Logo = styled(Box)(({ theme }) => ({}));

const HeaderBar: NP<HeaderBarProps> = (props) => {
  const [value, setValue] = React.useState<number>(0);
  const [RouteName, setRouteName] = React.useState<string>("home");

  const [selected, setselected] = React.useState<{ indexLink: number }>({
    indexLink: 0,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleclickSelected = (
    event: React.SyntheticEvent,
    ind: { ind: number }
  ) => {
    console.log("it's ok", ind);
  };

  return (
    <>
      <div className="AppBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ bgcolor: "darkOrange" }} elevation={0}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }}>
                <SearchBarInput />
              </Box>
              <Box sx={{ pr: 12 }}>
                <ThemeProvider theme={theme}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon tabs example"
                  >
                    <Tab
                      sx={{ color: "white" }}
                      disableRipple
                      icon={<HomeIcon sx={{ color: "white" }} />}
                      aria-label="Home"
                      label="Home"
                    />
                    <Tab
                      sx={{ color: "white" }}
                      disableRipple
                      icon={
                        <Badge
                          badgeContent={12}
                          sx={{
                            "& .MuiBadge-badge": {
                              bgcolor: `${red[600]}`,
                              color: "white",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          <GroupsIcon sx={{ color: "white" }} />
                        </Badge>
                      }
                      aria-label="Groups"
                      label="Groups"
                    />
                    <Tab
                      sx={{ color: "white" }}
                      disableRipple
                      icon={
                        <Badge
                          badgeContent={8}
                          sx={{
                            "& .MuiBadge-badge": {
                              bgcolor: `${red[600]}`,
                              color: "white",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          <ChatIcon sx={{ color: "white" }} />
                        </Badge>
                      }
                      aria-label="Chat"
                      label="Chat"
                    />
                    <Tab
                      sx={{ color: "white" }}
                      disableRipple
                      icon={<PeopleIcon sx={{ color: "white" }} />}
                      aria-label="person"
                      label="Friends"
                    />
                  </Tabs>
                </ThemeProvider>
              </Box>
              <Box>
                <Stack direction="row" spacing={2}>
                  <IconButton sx={{ bgcolor: "rgba(0,0,0,0.1)" }}>
                    <Badge
                      badgeContent={4}
                      sx={{
                        "& .MuiBadge-badge": {
                          bgcolor: `${red[600]}`,
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <NotificationsIcon sx={{ color: "white" }} />
                    </Badge>
                  </IconButton>
                  <IconButton sx={{ bgcolor: "rgba(0,0,0,0.1)" }}>
                    <PersonIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "rgba(0,0,0,0.1)" }}>
                    <DoubleArrowIcon sx={{ color: "white" }} />
                  </IconButton>
                </Stack>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            pt: 10,
            bgcolor: `${orange[50]}`,
          }}
        >
          <Grid container flexDirection="row">
            <Grid item>
              <Box
                sx={{
                  width: "240px",
                  borderColor: `${grey[300]}`,
                  borderWidth: 1,
                  borderStyle: "solid",
                  ml: 10,
                  borderTopLeftRadius: 12,
                  borderBottomRightRadius: 14,
                  bgcolor: "white",
                }}
              >
                <Box sx={{}}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <StyledBadge>
                          <Avatar
                            alt="user image"
                            src="/images/static/nicky2.jpg"
                            sx={{ width: 50, height: 50 }}
                          />
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontSize="0.8em" fontWeight="bold">
                            nicki minaj
                          </Typography>
                        }
                        secondary={
                          <Typography
                            fontSize="0.8em"
                            fontWeight="bold"
                            sx={{ color: `${grey[400]}` }}
                          >
                            @nicky#1
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  ml: 10,
                  width: 240,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: `${grey[300]}`,
                  borderTopLeftRadius: 12,
                  bgcolor: "white",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "5px",
                  }}
                >
                  <Typography
                    fontSize="1.3em"
                    fontWeight="bold"
                    sx={{ textTransform: "capitalize", fontFamily: "roboto" }}
                  >
                    {RouteName}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{}}>
                  <List>
                    {listInfo.map((val, ind) => {
                      const { icon, text } = val;
                      const sel = selected.indexLink;
                      return (
                        <ListItem
                          button
                          key={text}
                          sx={{
                            color: sel == ind ? "green" : null,
                            borderColor: sel == ind ? "green" : null,
                            borderLeftStyle: sel == ind ? "solid" : null,
                            borderLeftWidth: sel == ind ? 6 : null,
                            "&:hover": {
                              bgcolor: "white",
                            },
                          }}
                          onClick={(e) => {
                            setselected({ indexLink: ind });
                            setRouteName(text);
                            console.log(`${selected.indexLink} ${ind}`);
                            e.preventDefault;
                          }}
                          disableRipple
                        >
                          <ListItemIcon
                            sx={{
                              color: sel == ind ? "green" : null,
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontWeight="bold">{text}</Typography>
                            }
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  ml: 10,
                  width: 240,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: `${grey[300]}`,
                  bgcolor: "white",
                }}
              >
                <Box sx={{ p: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "green",
                      TextTransform: "capitalize",
                      fontWeigth: "bold",
                      borderRadius: 100,
                      fontFamily: "Roboto",
                      "&:hover": {
                        bgcolor: "green",
                      },
                    }}
                  >
                    See trusted sponsors
                  </Button>
                </Box>
                <Box>
                  <List></List>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: 500, ml: 6 }}>
                <Box>for the body</Box>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: 260,
                  ml: 10,
                }}
              >
                <Friends name="romeus clarens" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default HeaderBar;
