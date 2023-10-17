import {
  Footer,
  Header,
  MobileCards,
  Notification,
  ProductPhotos,
} from "../../components";

export const ProductItem = () => {
  return (
    <div>
      <Notification />
      <Header />
      <ProductPhotos />
      {/* <MobileCards /> */}
      <Footer />
    </div>
  );
};
