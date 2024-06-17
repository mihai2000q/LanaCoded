import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useMemo, useState} from "react";
import {themeSettings} from "./theme.ts";
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profiles from "./pages/Profiles.tsx";
import NavigationDrawer from "./components/NavigationDrawer.tsx";
import TopBar from "./components/TopBar.tsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationDrawer open={open} setOpen={setOpen} />
        <TopBar setOpen={setOpen} />
        <Routes>
          <Route path={"/"} element={<HomePage/>} />
          <Route path={"/profiles"} element={<Profiles/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
