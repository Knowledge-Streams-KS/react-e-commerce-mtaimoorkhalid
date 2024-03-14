/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./index.css";

function ProductCard(props) {
  return (
    <div className="ProductCard">
      <img src={props.image} alt="Product Image" />
      <div className="cardDetails">
        <NavLink to={`/productdetails/${props.id}`}>
          <h3>
            <b>Title:</b> {props.title}
          </h3>
        </NavLink>
        <p>
          <b>Price:</b> {props.price} RS
        </p>
        {props.category !== "" ? (
          <p>
            <b>Category:</b> {props.category}
          </p>
        ) : (
          <></>
        )}

        {props.description !== "" ? (
          <p>
            <b>Description:</b> {props.description}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
