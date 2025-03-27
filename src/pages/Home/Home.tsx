import { Box, Button } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { homeStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={homeStyles.root}>
      <Box sx={homeStyles.content}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box component="h1" sx={homeStyles.title}>
            Product list
          </Box>
        <Button variant="contained" color="primary"  onClick={() => navigate("/new-product")}>
            New Product
          </Button>
        </Box>
        <ProductList />
      </Box>
    </Box>
  );
};

export default Home;
