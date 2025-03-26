import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30536F",
      light: "#0fbda3",
      dark: "#0f2b46",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8338ec",
      light: "#a368ff",
      dark: "#5a00b8",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ff006e",
    },
    warning: {
      main: "#ffbe0b",
    },
    success: {
      main: "#38b000",
    },
    info: {
      main: "#00b4d8",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#212529",
      secondary: "#6c757d",
      disabled: "#adb5bd",
    },
    divider: "#e9ecef",
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.5px",
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#6c757d",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
        },
      },
    },
  },
});

export default theme;
