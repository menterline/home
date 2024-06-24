import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

export const AppBar = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          This page is a work in progress
        </Typography>
        <Button variant="text" color="inherit" sx={{ mr: 4 }}>
          Experience
        </Button>
        <Button variant="text" color="inherit" sx={{ mr: 4 }}>
          Projects
        </Button>
        <Button variant="text" color="inherit" sx={{ mr: 4 }}>
          Blog
        </Button>
      </>
    );
  };

  return (
    <MuiAppBar position="static" sx={{ backgroundColor: "#003566" }}>
      <Toolbar>{isSmallDevice ? <SmallDevice /> : <NonSmallDevice />}</Toolbar>
    </MuiAppBar>
  );
};
