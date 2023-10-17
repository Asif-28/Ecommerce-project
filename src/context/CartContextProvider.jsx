import React from "react";
import CartContext from "./CartContext";
const CartContextProvider = ({ children }) => {
    const [cartNo,setCartNo] =React.useState("13");
  return (
    <CartContext.Provider value={{cartNo,setCartNo}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;