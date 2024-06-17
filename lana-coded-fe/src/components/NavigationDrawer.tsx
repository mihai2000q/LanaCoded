import {Drawer, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Home, People} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

interface NavigationDrawer {
  open:boolean
  setOpen:(o:boolean) => void
}

function NavigationDrawer({open, setOpen}:NavigationDrawer) {
  const navigate = useNavigate()
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <List sx={{ ml: 2, mr: 2 }}>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon><Home/></ListItemIcon>
          <ListItemText>HomePage</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/profiles")}>
          <ListItemIcon><People/></ListItemIcon>
          <ListItemText>Profiles</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;