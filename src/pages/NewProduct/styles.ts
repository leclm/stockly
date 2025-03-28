import { SxProps, Theme } from "@mui/material/styles";

export const newProductStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "85%", sm: "90%", md: "80%" },
    maxWidth: "800px",
    backgroundColor: "background.paper",
    borderRadius: { xs: 0, sm: "12px" },
    boxShadow: { xs: 0, sm: 3 },
    padding: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
    margin: { xs: "1rem 0", sm: "2rem auto" },
    border: { xs: "none", sm: "1px solid" },
    borderColor: { xs: "none", sm: "divider" },
  } as SxProps<Theme>,

  title: {
    marginBottom: "1.5rem",
    fontSize: { xs: "1.5rem", sm: "1.75rem" },
    fontWeight: 600,
    color: "text.primary",
    alignSelf: "flex-start",
  } as SxProps<Theme>,

  formContainer: {
    width: "100%",
  } as SxProps<Theme>,

  submitButton: {
    marginTop: "1.5rem",
    py: { xs: "0.75rem", sm: "0.875rem" },
    fontSize: { xs: "0.9375rem", sm: "1rem" },
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "8px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  } as SxProps<Theme>,

  backButton: {
    alignSelf: { xs: "center", sm: "flex-start" },
    px: { xs: 3, sm: 4 },
    py: { xs: 1, sm: 1.5 },
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: 600,
    mt: { xs: 2, sm: 0 },
    mb: { xs: 2, sm: 0 },
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px",
    },
  } as SxProps<Theme>,

  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        borderWidth: "1.5px",
      },
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: { xs: "0.75rem", sm: "0.8125rem" },
    },
  } as SxProps<Theme>,

  fileInput: {
    width: "100%",
    py: 1.5,
    "&::file-selector-button": {
      backgroundColor: "primary.main",
      color: "primary.contrastText",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      marginRight: "1rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "primary.dark",
      },
    },
  } as SxProps<Theme>,

  gridItem: {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
  } as SxProps<Theme>,
};