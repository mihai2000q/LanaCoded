import {
  Avatar, Button, Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from "@mui/material";
import demoUserPic from "../assets/demo-user-pic.jpg";
import {Favorite, MoreVert, Share} from "@mui/icons-material";
import demoBlogPic from "../assets/demo-blog-pic.jpg";
import Blog from "../types/Blog.model";
import {useNavigate} from "react-router-dom";

function BlogCard({blog}: {blog: Blog}) {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: 345 }} key={blog.id}>
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

        <Button variant={'contained'} onClick={() => navigate(`/blogs/${blog.id}`)}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;