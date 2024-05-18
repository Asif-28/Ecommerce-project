import "./index.scss";
import Homepage from "./pages/HomePage/Homepage";
import Products from "./pages/ProductsPage/Products";
import CartContextProvider from "./context/CartContextProvider";
import { ProductItem } from "./pages/ProductItem/ProductItem";
import SearchContextProvider from "./context/SearchContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <ProductContextProvider>
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductItem />} />
              </Routes>
            </BrowserRouter>
          </>
        </ProductContextProvider>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
