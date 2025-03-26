import { SxProps, Theme } from "@mui/material/styles";

export const layoutStyles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  } as SxProps<Theme>,

  drawer: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
      borderRight: 'none',
      backgroundColor: 'primary.dark',
      boxShadow: 1,
    },
  } as SxProps<Theme>,
  
  listItem: {
    color: 'background.paper',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
    py: 1.5,
    px: 3,
  } as SxProps<Theme>,

  mainContent: {
    flexGrow: 1,
    backgroundColor: 'background.default',
  } as SxProps<Theme>,

  appBar: {
    mb: 3,
    pr: 3,
    backgroundColor: 'background.paper',
    color: 'text.primary',
    boxShadow: 1,
  } as SxProps<Theme>,

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    pl: 0,
    pr: 0,
  } as SxProps<Theme>,

  avatar: {
    width: 40,
    height: 40,
    mr: 1,
  } as SxProps<Theme>,

  menuButton: {
    color: 'text.secondary',
    '&:hover': {
      color: 'primary.main',
    },
  } as SxProps<Theme>,

};