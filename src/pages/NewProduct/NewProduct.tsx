import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newProductStyles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

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
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [, setProductData] = useState<ProductFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  useEffect(() => {
    if (id) {
      fetch(
        `https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setProductData(data);
          setValue("nome", data.nome);
          setValue("preco", data.preco);
          setValue("qt_vendas", data.qt_vendas);
          setValue("qt_estoque", data.qt_estoque);
          setValue("marca", data.marca);
        })
        .catch(() => toast.error("Error fetching product data"));
    } else {
      reset({
        imagem: undefined,
        nome: "",
        preco: "",
        qt_vendas: 0,
        qt_estoque: 0,
        marca: "",
      });
    }
  }, [id, setValue, reset, token]);

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);

    const formData = new FormData();
    if (data.imagem.length > 0) formData.append("imagem", data.imagem[0]);
    formData.append("nome", data.nome);
    formData.append("preco", data.preco.replace("R$", "").trim());
    formData.append("qt_vendas", data.qt_vendas.toString());
    formData.append("qt_estoque", data.qt_estoque.toString());
    formData.append("marca", data.marca);

    try {
      const method = id ? "PUT" : "POST";
      const url = id
        ? `https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product/${id}`
        : "https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product";

      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success(
          id ? "Product updated successfully!" : "Product created successfully!"
        );
        
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.error("Error saving product");
      }
    } catch {
      toast.error("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={newProductStyles.container}>
        <Typography variant="h4" sx={newProductStyles.title}>
          {id ? "Edit Product" : "New Product"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={newProductStyles.formContainer}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={id ? "" : "Name"}
                variant="outlined"
                {...register("nome", { required: "Name is required" })}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label={id ? "" : "Brand"}
                variant="outlined"
                {...register("marca", { required: "Brand is required" })}
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
                label={id ? "" : "Sales quantity"}
                variant="outlined"
                {...register("qt_vendas", { required: "Sales is required" })}
                error={!!errors.qt_vendas}
                helperText={errors.qt_vendas?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label={id ? "" : "Stock quantity"}
                variant="outlined"
                {...register("qt_estoque", { required: "Stock is required" })}
                error={!!errors.qt_estoque}
                helperText={errors.qt_estoque?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <input type="file" accept="image/*" {...register("imagem")} />
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={newProductStyles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : id ? "Update" : "Create"}
          </Button>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={newProductStyles.backButton}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <ToastContainer />
    </Container>
  );
};

export default NewProduct;
