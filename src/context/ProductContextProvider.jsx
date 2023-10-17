import React from "react";
import ProductContext from "./ProductsContext";
const ProductContextProvider = ({ children }) => {
  const [textHeader, setTextHeader] = React.useState("Category1");
  const [menu, setMenu] = React.useState("Menu1.1");
  return (
    <ProductContext.Provider value={{textHeader, setTextHeader, menu , setMenu }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;