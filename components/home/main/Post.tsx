import * as React from "react";
import { NextPage as NP } from "next";
import { Box, Typography, Button, Chip } from "@mui/material";
import { grey, green, orange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import { MakePost } from "@/components/home/customization/index";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface PostProps {
  name: string;
}

const Post: NP<PostProps> = ({ name }) => {
  const handleClick = () => {
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
              <IconButton aria-label="add to favorites">
                <ThumbUpOutlinedIcon />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Chip
                sx={{ bgcolor: `${orange[50]}`, ml: "auto" }}
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
      </div>
    </>
  );
};

export default Post;
