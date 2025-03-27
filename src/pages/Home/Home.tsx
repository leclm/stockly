import { Box, Button } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { homeStyles } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.successMessage) {
      toast.success(location.state.successMessage);
    }
  }, [location.state]);

  return (
    <Box sx={homeStyles.root}>
      <Box sx={homeStyles.content}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="h1" sx={homeStyles.title}>
            Product list
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/new-product")}
          >
            New Product
          </Button>
        </Box>
        <ProductList />
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Home;
