/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../productCard";
import "./index.css";
import { useParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [categoryName]);

  return (
    <div className="ProductList">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            description=""
            price={product.price}
            category=""
          />
        ))
      ) : (
        <p>Loading..........</p>
      )}
    </div>
  );
}

export default ProductList;
