import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Categories from "../pages/Categories";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import PrivateRoute from "./PrivateRoute";
export default function AppRoutes() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Product />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/productdetails/:id?" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart />}>
          <Route path="/cart/login" element={<Login></Login>}></Route>
        </Route>

        <Route
          path="/private"
          element={
            <PrivateRoute>
              <Cart></Cart>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}
