import {Button, Dialog, DialogContent, DialogTitle, Stack, TextField, useTheme} from "@mui/material";
import {useState} from "react";

function HomePage() {
  const [name, setName] = useState("name");
  const theme = useTheme()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"720px"}>
      <Button variant={"contained"} onClick={() => setIsDialogOpen(true)}>
        apasa mi pula cu nasul rawr
      </Button>

      <TextField
        variant={"filled"}
        label={"Name"}
        placeholder={"Please enter name..."}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} sx={{backgroundColor:theme.palette.background.default}}>
        <DialogTitle>
          Sugi pula
        </DialogTitle>
        <DialogContent>
          Esti un muist si un poponar
        </DialogContent>
      </Dialog>
    </Stack>
  );
}

export default HomePage;