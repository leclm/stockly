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
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'primary.main',
    mb: 4,
    textAlign: 'left',
    letterSpacing: '-0.5px',
    background: 'linear-gradient(to right, #3a86ff, #8338ec)',
    WebkitBackgroundClip: 'text',
  } as SxProps<Theme>,

  content: {
    width: '100%',
    maxWidth: 'xl',
    mx: 'auto',
  } as SxProps<Theme>,
};