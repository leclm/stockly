import { SxProps, Theme } from "@mui/material/styles";

export const loginStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  } as SxProps<Theme>,

  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "primary.contrastText",
    borderRadius: "8px",
    boxShadow: 3,
    padding: "2rem",
    margin: "0 auto",
  } as SxProps<Theme>,

  title: {
    marginBottom: "1.5rem",
    color: "primary.main",
  } as SxProps<Theme>,

  errorText: {
    marginBottom: "1rem",
  } as SxProps<Theme>,

  form: {
    width: "100%",
  } as SxProps<Theme>,

  textField: {
    marginBottom: "1rem",
  } as SxProps<Theme>,

  submitButton: {
    marginTop: "1rem",
  } as SxProps<Theme>,

  registerBox: {
    marginTop: "1rem",
    textAlign: "center",
  } as SxProps<Theme>,

  gridContainer: {
    width: "100%",
  } as SxProps<Theme>,
};