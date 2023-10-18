import "./index.scss";
import "./App.css";
// import Homepage from "./pages/HomePage/Homepage";
// import Products from "./pages/ProductsPage/Products";
import CartContextProvider from "./context/CartContextProvider";
import { ProductItem } from "./pages/ProductItem/ProductItem";
import SearchContextProvider from "./context/SearchContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import Magnify from "./components/ProductItem/Magnify";
function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <ProductContextProvider>
          <>
            {/* <Homepage />
            <Products /> */}
            <ProductItem />
            {/* <Magnify /> */}
          </>
        </ProductContextProvider>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
