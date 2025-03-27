import { SxProps, Theme } from "@mui/material/styles";

export const newProductStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "primary.contrastText",
    borderRadius: "8px",
    boxShadow: 3,
    padding: "2rem",
    margin: "2rem auto",
  } as SxProps<Theme>,

  title: {
    marginBottom: "1.5rem",
  } as SxProps<Theme>,

  formContainer: {
    width: "100%",
  } as SxProps<Theme>,

  submitButton: {
    marginTop: "1.5rem",
  } as SxProps<Theme>,

  backButton: {
    alignSelf: "flex-start",
    px: 4,
    py: 1.5,
    borderRadius: 2,
    textTransform: "none",
    fontWeight: 600,
  } as SxProps<Theme>,
};
