import {Card, Stack} from "@mui/material";
import {useGetAllBlogsQuery} from "../state/api.ts";
import BlogCard from "../components/BlogCard.tsx";

function HomePage() {
  const {data: blogs} = useGetAllBlogsQuery(undefined)

  return (
    <Stack alignItems={"center"}>
      <Card
        elevation={4}
        sx={{ width: 700 }}>
        <Stack alignItems={'center'} spacing={2} py={2}>
          {
            blogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog}/>
            ))
          }
        </Stack>
      </Card>
    </Stack>
  );
}

export default HomePage;