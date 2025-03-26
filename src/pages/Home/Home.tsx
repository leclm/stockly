import { Button, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "2rem", color: "#2c3e50" }}>
        Welcome to the Home Page
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log("Logout")}
        sx={{ padding: "1rem 2rem" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Home;
