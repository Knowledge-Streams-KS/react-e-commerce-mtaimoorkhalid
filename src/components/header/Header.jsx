import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink> &nbsp;&nbsp;&nbsp;
      <NavLink to={"/products"}>Products</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to={"/categories"}>Categories</NavLink>&nbsp;&nbsp;&nbsp;
    </>
  );
}
