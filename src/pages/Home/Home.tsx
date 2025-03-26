import { Button, Container, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xs" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#f7f8fa",
          borderRadius: "8px",
          boxShadow: 3,
          padding: "2rem",
          maxWidth: "400px",
          margin: "0 auto",
          height: "auto",
          "@media (min-width: 768px)": {
            backgroundColor: "#fff",
            maxWidth: "500px",
            padding: "3rem",
            margin: "4rem auto",
          },
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
    </Container>
  );
};

export default Home;
