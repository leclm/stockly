import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { productDetailsStyles } from "./styles";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

interface Product {
  id: string;
  nome: string;
  image: string;
  preco: string;
  qt_estoque: string;
  qt_vendas: string;
  marca: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      toast.error("You must be logged in to view product details.");
      navigate("/login");
      return;
    }

    fetch(`https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch(() => toast.error("Error fetching product details"));
  }, [id, token, navigate]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const formatPrice = (price: string) => {
    const number = parseFloat(price);
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const handleDeleteProduct = async () => {
    try {
      await fetch(
        `https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/home", {
        state: { successMessage: "Product deleted successfully!" },
      });
    } catch {
      toast.error("Error deleting product");
    }
  };

  return (
    <Box sx={productDetailsStyles.root}>
      <Box sx={productDetailsStyles.content}>
        <Box sx={productDetailsStyles.header}>
          <Typography sx={productDetailsStyles.title}>
            {product.nome}
          </Typography>
          <Box sx={productDetailsStyles.buttonGroup}>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none", fontWeight: 600 }}
              onClick={() => navigate(`/new-product/${id}`)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "none", fontWeight: 600 }}
              onClick={() => setOpenModal(true)}
            >
              Delete
            </Button>
          </Box>
        </Box>

        <Box sx={productDetailsStyles.detailsCard}>
          <Box sx={productDetailsStyles.imageContainer}>
            <Avatar
              src={product.image}
              alt={product.nome}
              sx={productDetailsStyles.avatar}
              variant="rounded"
            />
          </Box>

          <Box sx={productDetailsStyles.infoContainer}>
            <Box sx={productDetailsStyles.infoItem}>
              <Typography sx={productDetailsStyles.infoLabel}>
                Price:
              </Typography>
              <Typography sx={productDetailsStyles.price}>
                {formatPrice(product.preco)}
              </Typography>
            </Box>

            <Box sx={productDetailsStyles.infoItem}>
              <Typography sx={productDetailsStyles.infoLabel}>
                Stock:
              </Typography>
              <Typography sx={productDetailsStyles.infoValue}>
                {product.qt_estoque} units
              </Typography>
            </Box>

            <Box sx={productDetailsStyles.infoItem}>
              <Typography sx={productDetailsStyles.infoLabel}>
                Sales:
              </Typography>
              <Typography sx={productDetailsStyles.infoValue}>
                {product.qt_vendas} units
              </Typography>
            </Box>

            <Box sx={productDetailsStyles.infoItem}>
              <Typography sx={productDetailsStyles.infoLabel}>
                Brand:
              </Typography>
              <Typography sx={productDetailsStyles.infoValue}>
                {product.marca}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          variant="outlined"
          sx={productDetailsStyles.backButton}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>

        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to remove the product{" "}
              <strong>{product.nome}</strong>? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleDeleteProduct}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ProductDetails;
