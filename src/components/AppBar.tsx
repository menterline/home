import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AppBar = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const homeLink = {
    name: "Home",
    path: "/home/",
  };
  const navItems: Array<{ name: string; path: string }> = [
    {
      name: "Projects",
      path: "/home/projects",
    },
    {
      name: "Blog",
      path: "/home/blog",
    },
  ];
  const allItems = [homeLink, ...navItems];
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box color="primary" role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {allItems.map((item: { name: string; path: string }) => (
          <ListItem className="min-w-[150px]" key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText className="text-monokaiText" primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const SmallDevice = () => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
    );
  };
  const NonSmallDevice = () => {
    return (
      <>
        {homeLink && (
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
        )}
        <div className="flex">
          {navItems.map(({ name, path }) => (
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
      </>
    );
  };

  return (
    <MuiAppBar position="fixed" color="primary">
      <Toolbar className="flex flex-row justify-between">
        {isSmallDevice ? <SmallDevice /> : <NonSmallDevice />}
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </MuiAppBar>
  );
};
