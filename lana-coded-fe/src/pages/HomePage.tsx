import {
  Avatar, Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack, Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import {blogs} from "../mockData/Blogs.ts";
import {Favorite, MoreVert, Share} from "@mui/icons-material";
import demoUserPic from "./../assets/demo-user-pic.jpg"
import demoBlogPic from "./../assets/demo-blog-pic.jpg"

function HomePage() {
  const theme = useTheme()

  return (
    <Stack alignItems={"center"}>
      <Card
        elevation={4}
        sx={{ width: 700 }}>
        <Stack alignItems={'center'} spacing={2} py={2}>
          {
            blogs.map((blog) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Tooltip placement={'top'} title={blog.author}>
                      <Avatar src={demoUserPic} />
                    </Tooltip>
                  }
                  action={
                    <IconButton>
                      <MoreVert/>
                    </IconButton>
                  }
                  title={
                    <Typography fontSize={18} textTransform={'capitalize'}>
                      {blog.title}
                    </Typography>
                  }
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  src={demoBlogPic}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Stack direction={'row'} flexGrow={1}>
                    <IconButton aria-label="add to favorites">
                      <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                      <Share />
                    </IconButton>
                  </Stack>

                  <Button variant={'contained'}>
                    See More
                  </Button>
                </CardActions>
              </Card>
            ))
          }
        </Stack>
      </Card>
    </Stack>
  );
}

export default HomePage;