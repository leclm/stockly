import { SxProps, Theme } from "@mui/material/styles";

export const homeStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py: 4,
    px: 2,
    backgroundColor: 'background.default',
    minHeight: '100vh',
  } as SxProps<Theme>,

  title: {
    typography: 'h4',
    fontWeight: 700,
    color: 'text.primary',
    WebkitBackgroundClip: 'text',
    lineHeight: 1.2,
  } as SxProps<Theme>,

  content: {
    width: '100%',
    maxWidth: 'xl',
    mx: 'auto',
  } as SxProps<Theme>,
};