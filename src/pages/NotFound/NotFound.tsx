import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <Container sx={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" color="error.main">
        Page not found
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
        This page doesn't exists.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "2rem" }}
        onClick={handleGoBack}
      >
        Back
      </Button>
    </Container>
  );
};

export default NotFound;
