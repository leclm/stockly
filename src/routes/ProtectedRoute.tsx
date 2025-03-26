import { Navigate } from "react-router-dom";
import { ReactElement, useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const ProtectedRoute = ({ element }: { element: ReactElement }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const isAuthenticated = !!localStorage.getItem("authToken");

  useEffect(() => {
    if (!isAuthenticated) {
      setOpenSnackbar(true);

      setTimeout(() => {
        setRedirectToLogin(true);
      }, 3000);
    }
  }, [isAuthenticated]);

  if (redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthenticated) {
    return (
      <>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            You need to be logged in to access this page!
          </Alert>
        </Snackbar>
      </>
    );
  }

  return element;
};

export default ProtectedRoute;
