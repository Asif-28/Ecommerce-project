import "./index.scss";
import "./App.css";
// import Homepage from "./pages/HomePage/Homepage";
// import Products from "./pages/ProductsPage/Products";
import CartContextProvider from "./context/CartContextProvider";
import { ProductItem } from "./pages/ProductItem/ProductItem";
import SearchContextProvider from "./context/SearchContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <ProductContextProvider>
          <>
            {/* <Homepage />
            <Products /> */}
            <ProductItem />
          </>
        </ProductContextProvider>
        n
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
