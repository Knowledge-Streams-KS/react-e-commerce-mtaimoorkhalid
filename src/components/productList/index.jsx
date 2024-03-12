import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../productCard";
import axios from "axios";

function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      {product.length !== 0 ? (
        product.map((product, index) => {
          return (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          );
        })
      ) : (
        <p>Loading..........</p>
      )}
    </>
  );
}
export default ProductList;
