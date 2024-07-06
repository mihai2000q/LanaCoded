import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {themeSettings} from "./theme.ts";
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profiles from "./pages/Profiles.tsx";
import NavigationDrawer from "./components/NavigationDrawer.tsx";
import TopBar from "./components/TopBar.tsx";
import {store} from "./state/store.ts";
import {Provider} from "react-redux";
import Blog from "./pages/Blog.tsx";

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const theme = createTheme(themeSettings)
  const [open, setOpen] = useState(false)

  return (
    <div className={"app"}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationDrawer open={open} setOpen={setOpen} />
            <TopBar setOpen={setOpen} />
            <Routes>
              <Route path={"/"} element={<HomePage/>} />
              <Route path={"/profiles"} element={<Profiles/>} />
              <Route path={"/blogs/:id"} element={<Blog/>} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
