import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";
export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setProducts([response.data]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, [params.id]);

  return (
    <div className="ProductList">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        ))
      ) : (
        <p>Loading..........</p>
      )}
    </div>
  );
}
