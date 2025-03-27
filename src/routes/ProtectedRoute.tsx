import { Navigate } from "react-router-dom";
import { ReactElement, useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    if (!token) {
      setOpenSnackbar(true);
      setTimeout(() => setRedirectToLogin(true), 3000);
    }
  }, [token]);

  if (redirectToLogin) return <Navigate to="/login" replace />;

  if (!token) {
    return (
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          You need to be logged in to access this page!
        </Alert>
      </Snackbar>
    );
  }

  return children;
};

export default ProtectedRoute;
