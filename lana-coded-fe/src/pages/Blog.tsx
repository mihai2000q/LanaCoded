import {Typography} from "@mui/material";
import {useGetBlogQuery} from "../state/api.ts";
import {useParams} from "react-router-dom";

function Blog() {
  const {id} = useParams()
  const {data: blog} = useGetBlogQuery({id: id ?? ""})

  return (
    <div>
      <Typography>
        {blog?.title}
        {blog?.description}
      </Typography>
    </div>
  );
}

export default Blog;