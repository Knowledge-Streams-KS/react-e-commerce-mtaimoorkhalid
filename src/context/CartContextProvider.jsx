/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export { CartContextProvider, CartContext };
