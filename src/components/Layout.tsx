import { ReactNode, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, Menu, MenuItem, List, ListItem, ListItemText, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem component="button" onClick={() => navigate("/home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="button" onClick={() => navigate("/produtos")}>
            <ListItemText primary="Produtos" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#f4f6f9", padding: "20px" }}>
        {/* Header */}
        <AppBar position="static" sx={{ marginBottom: "20px", backgroundColor: "#fff", color: "#333" }}>
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {user?.nome} {user?.sobrenome}
              </Typography>
              <Avatar
                src={user?.image}
                alt="User"
                sx={{ marginRight: "10px", width: 40, height: 40 }}
              />
              <IconButton onClick={handleClick}>
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
