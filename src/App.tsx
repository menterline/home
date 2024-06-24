import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { AppBar } from "./components/AppBar";
import Content from "./components/Content";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Change the primary color here
    },
    secondary: {
      main: "#f50057", // Change the secondary color here
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
