import {
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const SmallDevice = () => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    );
  };
  const NonSmallDevice = () => {
    return (
      <>
        <Button
          className="flex"
          variant="text"
          onClick={() => navigate("/home/")}
          color="inherit"
          sx={{ mr: 4 }}
        >
          Home
        </Button>
        <div className="flex">
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/home/projects")}
            sx={{ mr: 4 }}
          >
            Projects
          </Button>
          <Button
            variant="text"
            onClick={() => navigate("/home/blog")}
            color="inherit"
            sx={{ mr: 4 }}
          >
            Blog
          </Button>
        </div>
      </>
    );
  };

  return (
    <MuiAppBar position="fixed" color="primary">
      <Toolbar className="flex flex-row justify-between">
        {isSmallDevice ? <SmallDevice /> : <NonSmallDevice />}
      </Toolbar>
    </MuiAppBar>
  );
};
