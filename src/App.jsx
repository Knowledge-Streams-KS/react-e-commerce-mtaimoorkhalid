import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Product />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/productdetails/:id?" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
