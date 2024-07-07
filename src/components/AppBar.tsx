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

  const navItems: Array<{ name: string; path: string }> = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Projects",
      path: "/home/projects",
    },
    {
      name: "Blog",
      path: "/home/blog",
    },
  ];
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
    const appBarItems = navItems;
    const homeLink = appBarItems[0];
    console.log(homeLink);
    return (
      <div className="flex flex-row justify-between">
        {homeLink && (
          <div>
            <Button
              key={homeLink.name}
              className="flex"
              variant="text"
              onClick={() => navigate(homeLink.path)}
              color="inherit"
              sx={{ mr: 4 }}
            >
              {homeLink?.name}
            </Button>
          </div>
        )}
        <div>
          {[...appBarItems.slice(1)].map(({ name, path }) => (
            <Button
              key={name}
              className="flex"
              variant="text"
              onClick={() => navigate(path)}
              color="inherit"
              sx={{ mr: 4 }}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <MuiAppBar position="fixed" color="primary">
      <Toolbar className="flex flex-row justify-end">
        {isSmallDevice ? <SmallDevice /> : <NonSmallDevice />}
      </Toolbar>
    </MuiAppBar>
  );
};
