import {
  Banner,
  Events,
  Footer,
  Header,
  MensProductList,
  Notification,
  ProductList,
} from "../../components";

const Homepage = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Events />
      <Banner />
      <ProductList />
      <MensProductList />
      <Footer />
    </div>
  );
};

export default Homepage;
