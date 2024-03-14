import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <NavLink to={"/products/jewelery"}>Jwellery</NavLink>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to={"/products/men's clothing"}>Men Clothing</NavLink>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to={"/products/electronics"}>Electronics</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}
