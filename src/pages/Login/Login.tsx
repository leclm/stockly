import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Grid, Typography, Link } from "@mui/material";
import { loginStyles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

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

      if (users.length === 0 || users[0].senha !== data.password) {
        setError("Incorrect email or password.");
        setLoading(false);
        return;
      }

      const user = users[0];

      login(user.token, { 
        image: user.image, 
        nome: user.nome, 
        sobrenome: user.sobrenome 
      });

      navigate("/home");
    } catch {
      setError("Error when trying to login");
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={loginStyles.container}>
      <Box sx={loginStyles.formContainer}>
        <Typography variant="h4" sx={loginStyles.title}>
          Login
        </Typography>

        {error && (
          <Typography variant="body2" color="error" sx={loginStyles.errorText}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={loginStyles.form}>
          <Grid container spacing={2} sx={loginStyles.gridContainer}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={loginStyles.textField}
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
                sx={loginStyles.textField}
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
                sx={loginStyles.submitButton}
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </Grid>
          </Grid>

          <Box sx={loginStyles.registerBox}>
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
