import {AppBar, Button, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {Menu} from "@mui/icons-material";

interface TopBarProps {
  setOpen:(open:boolean) => void
}

function TopBar({setOpen}:TopBarProps) {

  const theme = useTheme()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: theme.palette.text.primary }}
          onClick={() => setOpen(true)}
        >
          <Menu/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={'text.primary'}>
          Home
        </Typography>
        <Button sx={{ mr: 2, color: theme.palette.text.primary }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;