import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { AppBar } from "./components/AppBar";
import Content from "./components/Content";

import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { projectsList } from "./assets/projectsList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#354157",
    },
    secondary: {
      main: "#78CEE9",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#354157",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <div className="mt-12">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route
              path="/home/projects"
              element={<Projects projects={projectsList} />}
            />
            <Route path="/home/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
