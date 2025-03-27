import { ReactNode, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { layoutStyles } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Box sx={layoutStyles.root}>
      {/* Sidebar */}
      <Drawer sx={layoutStyles.drawer} variant="permanent" anchor="left">
        <ListItem onClick={() => navigate("/home")} sx={layoutStyles.listItem}>
          <ListItemButton component="div">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/new-product")} sx={layoutStyles.listItem}>
          <ListItemButton component="div">
            <ListItemText primary="New Product" />
          </ListItemButton>
        </ListItem>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={layoutStyles.mainContent}>
        {/* Header */}
        <AppBar position="static" sx={layoutStyles.appBar}>
          <Toolbar sx={layoutStyles.toolbar}>
            <Typography variant="h6" component="div">
              {user?.nome} {user?.sobrenome}
            </Typography>
            <Box display="flex" alignItems="center">
              <Avatar src={user?.image} alt="User" sx={layoutStyles.avatar} />
              <IconButton onClick={handleClick} sx={layoutStyles.menuButton}>
                <ExpandMoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 1,
            sx: {
              mt: 1,
              minWidth: 180,
            },
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
