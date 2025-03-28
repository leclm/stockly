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
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { layoutStyles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

const Layout = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={layoutStyles.root}>
      {/* Sidebar */}
      <Drawer
        sx={layoutStyles.drawer}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 0, mb: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={layoutStyles.mobileMenuButton}>
              <MenuIcon />
            </IconButton>
          </Box>
        )}
        
        <ListItem onClick={() => navigate("/home")} sx={layoutStyles.listItem}>
          <ListItemButton component="div">
            <ListItemIcon sx={layoutStyles.listItemIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={layoutStyles.listItemText} />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => navigate("/new-product")}
          sx={layoutStyles.listItem}
        >
          <ListItemButton component="div">
            <ListItemIcon sx={layoutStyles.listItemIcon}>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="New Product" sx={layoutStyles.listItemText} />
          </ListItemButton>
        </ListItem>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={layoutStyles.mainContent}>
        {/* Header */}
        <AppBar position="static" sx={layoutStyles.appBar}>
          <Toolbar sx={layoutStyles.toolbar}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
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