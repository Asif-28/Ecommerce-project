import "./index.scss";
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
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
