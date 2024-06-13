import {AppBar, Button, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {Menu} from "@mui/icons-material";

function TopBar() {

  const theme = useTheme()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color={theme.palette.text.primary}
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={'text.primary'}>
          Home
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;