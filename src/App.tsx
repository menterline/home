import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { AppBar } from "./components/AppBar";
import Content from "./components/Content";

import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
function Projects() {
  return <h2>Projects</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
