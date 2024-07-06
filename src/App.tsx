import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { AppBar } from "./components/AppBar";
import Content from "./components/Content";

import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#354157",
    },
    secondary: {
      main: "#78CEE9",
    },
  },
});
function Projects() {
  return (
    <h2 className="text-2xl text-center mt-24">Projects... Coming Soon!</h2>
  );
}

function Blog() {
  return <h2 className="text-2xl text-center mt-24">Blog... Coming Soon!</h2>;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <div className="mt-12">
          <Routes>
            <Route path="/home" element={<Content />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
