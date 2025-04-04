import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout/Layout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NewProduct from "../pages/NewProduct/NewProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <ProductDetails  />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-product"
        element={
          <ProtectedRoute>
            <Layout>
              <NewProduct  />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-product/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <NewProduct  />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
