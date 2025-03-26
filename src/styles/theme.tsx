// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // cor primária (verde)
    },
    secondary: {
      main: "#FF5722", // cor secundária (laranja)
    },
    background: {
      default: "#f7f8fa", // fundo padrão
    },
    text: {
      primary: "#333", // cor do texto principal
      secondary: "#7f8c8d", // cor do texto secundário
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;
