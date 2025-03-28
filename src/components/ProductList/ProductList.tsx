import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  TextField,
  TablePagination,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import { productListStyles } from "./styles";
import { useNavigate } from "react-router-dom";
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

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(15);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!token) {
      console.error("Token is missing, user may not be logged in.");
      return;
    }

    fetch("https://67ddc6fd471aaaa7428282c2.mockapi.io/api/v1/product", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => console.error("Error fetching products"));
  }, [token]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product?.nome?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  const formatPrice = (price: string) => {
    const number = parseFloat(price);
    if (isNaN(number)) return "R$ 0,00";
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Paper sx={productListStyles.paper}>
      <TextField
        label="Search by product name"
        variant="outlined"
        fullWidth
        sx={productListStyles.searchField}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table>
          {!isMobile && (
            <TableHead sx={productListStyles.tableHeader}>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Sales</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((product) => (
                <TableRow key={product.id} sx={isMobile ? productListStyles.mobileRow : productListStyles.tableRow}>
                  {isMobile && (
                    <TableCell>
                      <Box sx={productListStyles.mobileRowHeader}>
                        <Avatar
                          src={product.image}
                          alt={product.nome}
                          sx={productListStyles.avatar}
                          variant="rounded"
                        />
                        <Typography sx={productListStyles.mobileProductName}>
                          {product.nome}
                        </Typography>
                      </Box>
                    </TableCell>
                  )}

                  {!isMobile && (
                    <TableCell>
                      <Avatar
                        src={product.image}
                        alt={product.nome}
                        sx={productListStyles.avatar}
                        variant="rounded"
                      />
                    </TableCell>
                  )}

                  {!isMobile && <TableCell>{product.nome}</TableCell>}

                  <TableCell sx={isMobile ? null : productListStyles.responsiveTableCell}>
                    {isMobile && <Box component="span" sx={productListStyles.mobileLabel}>Price:</Box>}
                    <Typography variant="body2" sx={{ fontWeight: isMobile ? 500 : 'inherit' }}>
                      {formatPrice(product.preco)}
                    </Typography>
                  </TableCell>

                  <TableCell sx={isMobile ? null : productListStyles.responsiveTableCell}>
                    {isMobile && <Box component="span" sx={productListStyles.mobileLabel}>Stock:</Box>}
                    {product.qt_estoque}
                  </TableCell>

                  <TableCell sx={isMobile ? null : productListStyles.responsiveTableCell}>
                    {isMobile && <Box component="span" sx={productListStyles.mobileLabel}>Sales:</Box>}
                    {product.qt_vendas}
                  </TableCell>

                  <TableCell sx={isMobile ? null : productListStyles.responsiveTableCell}>
                    {isMobile && <Box component="span" sx={productListStyles.mobileLabel}>Brand:</Box>}
                    {product.marca}
                  </TableCell>

                  <TableCell>
                    {isMobile ? (
                      <Box sx={productListStyles.mobileDetailButton}>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          sx={productListStyles.detailButton}
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          View Details
                        </Button>
                      </Box>
                    ) : (
                      <Button
                        variant="contained"
                        size="medium"
                        sx={productListStyles.detailButton}
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Details
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredProducts.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPageOptions={[15]}
        sx={productListStyles.pagination}
      />
    </Paper>
  );
};

export default ProductList;