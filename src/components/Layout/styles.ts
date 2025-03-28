import { SxProps, Theme } from "@mui/material/styles";

export const layoutStyles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  } as SxProps<Theme>,

  drawer: {
    width: { xs: 56, sm: 240 },
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: { xs: 56, sm: 240 },
      boxSizing: 'border-box',
      borderRight: 'none',
      backgroundColor: 'primary.dark',
      boxShadow: 1,
      overflowX: 'hidden',
      transition: 'width 0.3s ease',
    },
  } as SxProps<Theme>,

  listItem: {
    color: 'background.paper',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
    py: 1.5,
    px: { xs: 0, sm: 3 },
    whiteSpace: 'nowrap',
  } as SxProps<Theme>,

  listItemText: {
    display: { xs: 'none', sm: 'block' },
  } as SxProps<Theme>,

  listItemIcon: {
    minWidth: { xs: 'auto', sm: 56 },
    color: 'inherit',
  } as SxProps<Theme>,

  mainContent: {
    flexGrow: 1,
    backgroundColor: 'background.default',
    p: { xs: 2, sm: 3 },
    width: { xs: 'calc(100% - 56px)', sm: 'calc(100% - 240px)' },
  } as SxProps<Theme>,

  appBar: {
    mb: { xs: 2, sm: 3 },
    pr: { xs: 2, sm: 3 },
    pl: { xs: 2, sm: 3 },
    backgroundColor: 'background.paper',
    color: 'text.primary',
    boxShadow: 1,
  } as SxProps<Theme>,

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    pl: { xs: 1, sm: 0 },
    pr: { xs: 1, sm: 0 },
  } as SxProps<Theme>,

  avatar: {
    width: 40,
    height: 40,
    mr: 1,
  } as SxProps<Theme>,

  menuButton: {
    '&:hover': {
      color: 'primary.main',
    },
  } as SxProps<Theme>,

  mobileMenuButton: {
    display: { sm: 'none' },
    color: 'background.paper',
    mr: 1,
  } as SxProps<Theme>,
};