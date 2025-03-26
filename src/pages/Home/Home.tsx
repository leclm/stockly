import { Box, Button } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { homeStyles } from "./styles";

const Home = () => {
  return (
    <Box sx={homeStyles.root}>
      <Box sx={homeStyles.content}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box component="h1" sx={homeStyles.title}>
            Product list
          </Box>
          <Button variant="contained" color="primary">
            New Product
          </Button>
        </Box>
        <ProductList />
      </Box>
    </Box>
  );
};

export default Home;
