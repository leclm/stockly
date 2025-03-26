import {
  TextField,
  Button,
  Container,
  Box,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  interface LoginFormData {
    email: string;
    password: string;
  }

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/user?search=${data.email}`
      );
      const users = await response.json();

      if (users.length === 0) {
        setError("Incorrect email or password.");
        setLoading(false);
        return;
      }

      const user = users[0];

      if (user.senha !== data.password) {
        setError("Incorrect email or password.");
        setLoading(false);
        return;
      }

      localStorage.setItem("authToken", user.token);
      localStorage.setItem("user", JSON.stringify({ image: user.image, nome: user.nome, sobrenome: user.sobrenome }));

      navigate("/home");
    } catch (error) {
      setError(`Error when trying to login: ${error}`);
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
          padding: "2rem",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "1.5rem", color: "#2c3e50" }}
        >
          Login
        </Typography>

        {error && (
          <Typography
            variant="body2"
            color="error"
            sx={{ marginBottom: "1rem" }}
          >
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Fazendo Login..." : "Login"}
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/register" color="primary">
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
