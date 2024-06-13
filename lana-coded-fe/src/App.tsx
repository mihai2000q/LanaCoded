import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useMemo} from "react";
import {themeSettings} from "./theme.ts";
import HomePage from "./pages/HomePage.tsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
