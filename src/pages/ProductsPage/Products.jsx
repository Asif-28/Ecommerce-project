import { Footer, Header, Notification, Page, UpArrow } from "../../components";
import ProductContextProvider from "../../context/ProductContextProvider";
import SearchContextProvider from "../../context/SearchContextProvider";

const Products = () => {
  return (
    <div>
      <SearchContextProvider>
        <ProductContextProvider>
          <Notification />
          <Header />
          <Page />
          <UpArrow />
          <Footer />
        </ProductContextProvider>
      </SearchContextProvider>
    </div>
  );
};

export default Products;
