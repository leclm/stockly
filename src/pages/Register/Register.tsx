import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from "@mui/material";
import { useRef, useState } from "react";
import { cpf } from "cpf-cnpj-validator";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBR from "date-fns/locale/pt-BR";
import { useForm, Controller } from "react-hook-form";
import { registerStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  interface FormData {
    firstname: string;
    lastname: string;
    cpf: string;
    email: string;
    password: string;
    gender: string;
    birthdate: string;
    cep: string;
    logradouro?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    complement?: string;
  }

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const generateToken = () => {
    return crypto.randomUUID();
  };

  const [loading, setLoading] = useState(false);
  const loadingAddress = useRef(false);
  const navigate = useNavigate();

  const handleCepChange = async (cep: string) => {
    if (cep.length === 8) {
      loadingAddress.current = true;

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const addressData = await response.json();
        if (!addressData.erro) {
          setValue("logradouro", addressData.logradouro);
          setValue("bairro", addressData.bairro);
          setValue("cidade", addressData.localidade);
          setValue("estado", addressData.uf);
        } else {
          alert("Zip code not found");
        }
      } catch (error) {
        alert(`Error searching for zip code: ${error}`);
        loadingAddress.current = false;
      }
    }
  };

  const logradouroValue = watch("logradouro");
  const bairroValue = watch("bairro");
  const cidadeValue = watch("cidade");
  const estadoValue = watch("estado");

  const onSubmit = async (data: FormData) => {
    const token = generateToken();

    const userData = {
      nome: data.firstname,
      sobrenome: data.lastname,
      cpf: data.cpf,
      sexo: data.gender,
      dt_nascimento: new Date(data.birthdate).getTime(),
      cep: data.cep,
      cidade: data.cidade,
      estado: data.estado,
      logradouro: data.logradouro,
      bairro: data.bairro,
      complemento: data.complement,
      email: data.email,
      senha: data.password,
      token: token,
    };

    setLoading(true);
    try {
      const response = await fetch(
        "https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        toast.success(
          `Successfully registered ${result.nome} ${result.sobrenome}`
        );
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Error registering user");
      }
    } catch {
      toast.error("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={registerStyles.container}>
      <Box sx={registerStyles.formContainer}>
        <Typography variant="h4" sx={registerStyles.title}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={registerStyles.form}
        >
          <Grid container spacing={2} sx={registerStyles.gridContainer}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                sx={registerStyles.textField}
                {...register("firstname", {
                  required: "First Name is required",
                })}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                sx={registerStyles.textField}
                {...register("lastname", { required: "Last Name is required" })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="CPF"
                variant="outlined"
                sx={registerStyles.textField}
                {...register("cpf", {
                  required: "CPF is required",
                  validate: (value) => cpf.isValid(value) || "Invalid CPF",
                })}
                error={!!errors.cpf}
                helperText={errors.cpf?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={registerStyles.textField}
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
                sx={registerStyles.textField}
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                sx={registerStyles.formControl}
              >
                <InputLabel>Gender</InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select {...field} label="Gender" error={!!errors.gender}>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="non-binary">Non-binary</MenuItem>
                      <MenuItem value="prefere-not-to-say">
                        Prefer not to say
                      </MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ptBR}
              >
                <Controller
                  name="birthdate"
                  control={control}
                  defaultValue={undefined}
                  rules={{
                    required: "Birthdate is required",
                    validate: (value) =>
                      value !== null || "Birthdate is required",
                  }}
                  render={({ field }) => (
                    <DatePicker
                      label="Date of Birth"
                      value={field.value ? new Date(field.value) : null}
                      onChange={(newValue) => field.onChange(newValue)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: registerStyles.textField,
                          error: !!errors.birthdate,
                          helperText: errors.birthdate?.message,
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ZIP Code"
                variant="outlined"
                sx={registerStyles.textField}
                {...register("cep", { required: "ZIP Code is required" })}
                onBlur={(e) => handleCepChange(e.target.value)}
                error={!!errors.cep}
                helperText={
                  typeof errors.cep?.message === "string"
                    ? errors.cep.message
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={logradouroValue ? "" : "Address"}
                variant="outlined"
                sx={registerStyles.textField}
                {...register("logradouro")}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={bairroValue ? "" : "Neighborhood"}
                variant="outlined"
                sx={registerStyles.textField}
                {...register("bairro")}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={cidadeValue ? "" : "City"}
                variant="outlined"
                sx={registerStyles.textField}
                {...register("cidade")}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={estadoValue ? "" : "State"}
                variant="outlined"
                sx={registerStyles.textField}
                {...register("estado")}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Complement"
                variant="outlined"
                sx={registerStyles.textField}
                {...register("complement", {
                  required: "Complement is required",
                })}
                error={!!errors.complement}
                helperText={errors.complement?.message}
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={registerStyles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
          <Box sx={registerStyles.loginBox}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/login" color="primary">
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default Register;
