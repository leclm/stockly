import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { newProductStyles } from "./styles";
import { useNavigate } from "react-router-dom";

interface ProductFormData {
  imagem: FileList;
  nome: string;
  preco: string;
  qt_vendas: number;
  qt_estoque: number;
  marca: string;
}

const NewProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("imagem", data.imagem[0]);
    formData.append("nome", data.nome);
    formData.append("preco", data.preco.replace("R$", "").trim());
    formData.append("qt_vendas", data.qt_vendas.toString());
    formData.append("qt_estoque", data.qt_estoque.toString());
    formData.append("marca", data.marca);

    try {
      const response = await fetch(
        "https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Product created successfully!");
      } else {
        alert("Error creating product.");
      }
    } catch (error) {
      alert(`Error connecting to API: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
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
          margin: "2rem auto",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1.5rem" }}>
          New Product
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("nome", { required: "Name is required" })}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Brand"
                variant="outlined"
                {...register("marca", {
                  required: "Brand is required",
                })}
                error={!!errors.marca}
                helperText={errors.marca?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                {...register("preco", { required: "Price is required" })}
                error={!!errors.preco}
                helperText={errors.preco?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Sales quantity"
                variant="outlined"
                {...register("qt_vendas", {
                  required: "Sales is required",
                  min: { value: 0, message: "Cannot be negative" },
                })}
                error={!!errors.qt_vendas}
                helperText={errors.qt_vendas?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Stock quantity"
                variant="outlined"
                {...register("qt_estoque", {
                  required: "Stock is required",
                  min: { value: 0, message: "Cannot be negative" },
                })}
                error={!!errors.qt_estoque}
                helperText={errors.qt_estoque?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                {...register("imagem", { required: "Image is required" })}
              />
              {errors.imagem && (
                <Typography color="error" variant="body2">
                  {errors.imagem.message}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: "1.5rem" }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </Button>
        </Box>
      </Box>{" "}
      <Button
        variant="outlined"
        sx={newProductStyles.backButton}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Container>
  );
};

export default NewProduct;
