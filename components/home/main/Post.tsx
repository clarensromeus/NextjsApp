import * as React from "react";
import { NextPage as NP } from "next";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { grey, blue, orange, green } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import { MakePost } from "@/components/home/customization/index";
import AvatarGroup from "@mui/material/AvatarGroup";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SkateboardingOutlinedIcon from "@mui/icons-material/SkateboardingOutlined";
import SportsRugbyOutlinedIcon from "@mui/icons-material/SportsRugbyOutlined";

interface PostProps {
  name: string;
}

const Post: NP<PostProps> = ({ name }) => {
  const handleClick = (event: React.SyntheticEvent) => {
    console.info("You clicked the Chip.");
    console.log("the event is", event);
  };

  return (
    <>
      <div>
        <Box mt={1}>
          <Typography fontSize="2.1em" fontFamily="monospace" fontWeight="bold">
            For you{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 550,
            bgcolor: "white",
            borderRadius: 8,
            borderColor: `${grey[300]}`,
            borderStyle: "solid",
            borderWidth: 1,
            mt: 1,
          }}
        >
          <Box mt={2} ml={2} sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Avatar
                sx={{ width: 56, height: 56, color: "white", bgcolor: "green" }}
                alt="user post"
              >
                <Typography fontWeight="bold" fontSize="1.1em">
                  RC
                </Typography>
              </Avatar>
            </Box>
            <Box
              ml={2}
              sx={{ width: 436, display: "flex", flexDirection: "column" }}
            >
              <MakePost placeholder="Create a post" fullWidth size="medium" />
              <Box
                mt={1}
                sx={{
                  width: 440,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "space-around",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    "& .photo": {
                      color: `${grey[600]}`,
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Button
                    disableRipple
                    variant="outlined"
                    sx={{
                      borderWidth: 0,
                      "&:hover": { borderWidth: 0, bgcolor: "white" },
                    }}
                    startIcon={
                      <PhotoSizeSelectActualIcon sx={{ color: "darkOrange" }} />
                    }
                  >
                    <Typography className="photo" fontSize="0.9em">
                      photo
                    </Typography>
                  </Button>
                </Box>
                <Box
                  component="div"
                  sx={{
                    "& .video": {
                      color: `${grey[600]}`,
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Button
                    disableRipple
                    variant="outlined"
                    sx={{
                      borderWidth: 0,
                      "&:hover": { borderWidth: 0, bgcolor: "white" },
                    }}
                    startIcon={<VideoCameraBackIcon sx={{ color: "green" }} />}
                  >
                    <Typography className="video" fontSize="0.9em">
                      Video
                    </Typography>
                  </Button>
                </Box>
                <Box
                  component="div"
                  sx={{
                    "& .document": {
                      color: `${grey[600]}`,
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Button
                    disableRipple
                    variant="outlined"
                    sx={{
                      borderWidth: 0,
                      "&:hover": { borderWidth: 0, bgcolor: "white" },
                    }}
                    startIcon={<DescriptionIcon sx={{ color: "blue" }} />}
                  >
                    <Typography className="document" fontSize="0.9em">
                      document
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={2}>
          <Divider />
        </Box>
        <Box mt={2} sx={{ alignSelf: "center" }}>
          <Button sx={{ borderWidth: 0 }} startIcon={<AddIcon sx={{}} />}>
            <Typography
              sx={{ textTransform: "capitalize", mt: "3px" }}
              fontWeight="bold"
            >
              see more post...
            </Typography>
          </Button>
        </Box>
        <Box mt={1}>
          <Card sx={{ maxWidth: 560 }} elevation={0}>
            <CardHeader
              sx={{ mb: -3 }}
              avatar={
                <Avatar
                  sx={{ width: 54, height: 54 }}
                  aria-label="user"
                  alt="unicef"
                  src="/images/static/unicef.png"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Typography
                  fontWeight="bold"
                  sx={{
                    "& .uni": {
                      ml: 1,
                      fontWeight: "normal",
                      color: `${grey[500]}`,
                    },
                  }}
                >
                  Unicef<span className="uni">@unicefHaiti</span>
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ color: `${grey[500]}` }}
                  fontWeight="bold"
                  fontSize="1em"
                >
                  Unicefhaiti@gmail.com
                </Typography>
              }
            />
            <CardContent sx={{ mb: -2 }}>
              <Typography variant="body2" fontWeight="bold">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="share">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Chip
                sx={{ bgcolor: `${blue[50]}`, ml: "auto" }}
                label={
                  <Typography fontWeight="bold" sx={{ fontFamily: "roboto" }}>
                    ...follow
                  </Typography>
                }
                onClick={handleClick}
              />
            </CardActions>
          </Card>
        </Box>
        <Box mt={2}>
          <Card sx={{ maxWidth: 560 }} elevation={0}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 54, height: 54 }}
                  aria-label="user"
                  alt="c. ronaldo"
                  src="/images/static/cr7.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Typography
                  fontWeight="bold"
                  sx={{
                    "& .user": {
                      ml: 1,
                      fontWeight: "normal",
                      color: `${grey[600]}`,
                    },
                  }}
                >
                  c.ronaldo<span className="user">cr7-worldstar...</span>
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ color: `${grey[500]}` }}
                  fontWeight="bold"
                  fontSize="1em"
                >
                  c.ronaldo07@gmail.com
                </Typography>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/static/cr7-2.jpg"
              alt="cr7"
            />
            <CardContent sx={{}}>
              <Box>
                <Typography fontWeight="bold" sx={{}}>
                  if you like the picture i post and you want more please as my
                  one of my avid and crazy fan please leave a comment below to
                  tell me how you feel and like me in passing
                </Typography>
              </Box>
              <Box mt={2}>
                <AvatarGroup sx={{ mr: "214px" }}>
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="fantom"
                    src="/images/static/fantom.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="cristiano"
                    src="/images/static/cr7.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="neymar"
                    src="/images/static/neymar-2.jpg"
                  />
                  <Typography
                    mr={1}
                    mt="2px"
                    fontWeight="bold"
                    fontSize="0.9em"
                  >
                    like by fantom and 20 other people...
                  </Typography>
                </AvatarGroup>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Box component="span" sx={{}}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${blue[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ThumbUpOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .like": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      1.1k<span className="like">likes</span>
                    </Typography>
                  </Button>
                </Box>
                <Box component="span" ml={1}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${green[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ChatOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .comment": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      210<span className="comment">comments</span>
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box sx={{}}>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: `${grey[900]}` }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
        <Box mt={1}>
          <Typography fontWeight="bold" fontSize="2.1em" fontFamily="monospace">
            Choose a topic
          </Typography>
        </Box>
        <Box ml={3} mt={1}>
          <Stack spacing={2} direction="row">
            <Box>first topic</Box>
            <Box> the image</Box>
            <Box>second topic</Box>
          </Stack>
        </Box>
        <Box mt={1}>
          <Card sx={{ maxWidth: 560 }} elevation={0}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 54, height: 54 }}
                  aria-label="user"
                  alt="cardi-b"
                  src="/images/static/cardib1.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Typography
                  fontWeight="bold"
                  sx={{
                    "& .user": {
                      ml: 1,
                      fontWeight: "normal",
                      color: `${grey[500]}`,
                    },
                  }}
                >
                  cardi-b<span className="user">cardi-beauty01...</span>
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ color: `${grey[500]}` }}
                  fontWeight="bold"
                  fontSize="1em"
                >
                  cardi-b509@gmail.com
                </Typography>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/static/cardi-b2.webp"
              alt="cardi-b"
            />
            <CardContent sx={{}}>
              <Box>
                <Typography fontWeight="bold" sx={{}}>
                  if you like the picture i post and you want more please as my
                  one of my avid and crazy fan please leave a comment below to
                  tell me how you feel and like me in passing
                </Typography>
              </Box>
              <Box mt={2}>
                <AvatarGroup sx={{ mr: "214px" }}>
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="fantom"
                    src="/images/static/fantom.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="cristiano"
                    src="/images/static/cr7.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="neymar"
                    src="/images/static/neymar-2.jpg"
                  />
                  <Typography
                    mr={1}
                    mt="2px"
                    fontWeight="bold"
                    fontSize="0.9em"
                  >
                    like by fantom and 20 other people...
                  </Typography>
                </AvatarGroup>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Box component="span" sx={{}}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${blue[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ThumbUpOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .like": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      455<span className="like">likes</span>
                    </Typography>
                  </Button>
                </Box>
                <Box component="span" ml={1}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${green[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ChatOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .comment": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      90<span className="comment">comments</span>
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box sx={{}}>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: `${grey[900]}` }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 560 }} elevation={0}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 54, height: 54 }}
                  aria-label="user"
                  alt="neymar"
                  src="/images/static/neymar-2.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Typography
                  fontWeight="bold"
                  sx={{
                    "& .user": {
                      ml: 1,
                      fontWeight: "normal",
                      color: `${grey[500]}`,
                    },
                  }}
                >
                  neymar<span className="user">neymar10junior</span>
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ color: `${grey[500]}` }}
                  fontWeight="bold"
                  fontSize="1em"
                >
                  neymarjunior10@gmail.com
                </Typography>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/static/neymar-jr.webp"
              alt="neymar"
            />
            <CardContent sx={{}}>
              <Box>
                <Typography fontWeight="bold" sx={{}}>
                  one of the best star of the world and we all know already know
                  that thanks for supporting me all fans
                </Typography>
              </Box>
              <Box mt={2}>
                <AvatarGroup sx={{ mr: "214px" }}>
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="fantom"
                    src="/images/static/fantom.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="cristiano"
                    src="/images/static/cr7.jpg"
                  />
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="neymar"
                    src="/images/static/neymar-2.jpg"
                  />
                  <Typography
                    mr={1}
                    mt="2px"
                    fontWeight="bold"
                    fontSize="0.9em"
                  >
                    like by fantom and 20 other people...
                  </Typography>
                </AvatarGroup>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Box component="span" sx={{}}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${blue[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ThumbUpOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .like": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      2k<span className="like">likes</span>
                    </Typography>
                  </Button>
                </Box>
                <Box component="span" ml={1}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 12,
                      bgcolor: `${green[50]}`,
                      color: `${grey[900]}`,
                    }}
                    startIcon={<ChatOutlinedIcon />}
                  >
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8em"
                      sx={{
                        "& .comment": {
                          ml: "2px",
                          textTransform: "lowercase",
                          fontFamily: "roboto",
                        },
                      }}
                    >
                      1k<span className="comment">comments</span>
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box sx={{}}>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: `${grey[900]}` }} />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Post;
