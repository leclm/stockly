import { SxProps, Theme } from "@mui/material/styles";

export const registerStyles = {
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
    margin: "40px auto",
  } as SxProps<Theme>,

  title: {
    marginBottom: "1.5rem",
    color: 'primary.main',
  } as SxProps<Theme>,

  form: {
    width: "100%",
  } as SxProps<Theme>,

  textField: {
    marginBottom: "1rem",
  } as SxProps<Theme>,

  formControl: {
    marginBottom: "1rem",
    width: "100%",
  } as SxProps<Theme>,

  submitButton: {
    marginTop: "1rem",
  } as SxProps<Theme>,

  loginBox: {
    marginTop: "1rem",
    textAlign: "center",
  } as SxProps<Theme>,

  gridContainer: {
    width: "100%",
  } as SxProps<Theme>,
};