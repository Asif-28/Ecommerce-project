import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
import { ProductCard } from "./ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import products from "../../data/dummyProducts";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const { searchText } = useContext(SearchContext);

  const PreviousBtn = ({ onClick }) => {
    return (
      <div
        className="absolute top-32 right-10 z-10 cursor-pointer  hidden md:block overflow-x-hidden"
        onClick={onClick}
      >
        <ArrowForwardIosIcon
          style={{
            fontSize: "50px",
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "100px",
          }}
        />
      </div>
    );
  };
  const NextBtn = ({ onClick }) => {
    // const { className, onClick } = props;
    return (
      <div
        className="absolute top-32 z-10 cursor-pointer hidden md:block"
        onClick={onClick}
      >
        <ArrowBackIosIcon
          style={{
            fontSize: "50px",
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "100px",
          }}
        />
      </div>
    );
  };
  const settings = {
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <NextBtn />,
    nextArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" section slider-container mt-[2rem] md:mt-[4rem] ">
      <div className="details flex justify-between items-center">
        <h2 className="pb-4 md:pb-6 pl-4 md:ml-20 text-[18px] sm:text-[22px] ">
          Today&apos;s Special
        </h2>
        <button className="pb-4 text-[18px] sm:text-xl underline md:hidden pr-6">
          Show All
        </button>
      </div>
      <div className="product-slider overflow-x-hidden">
        <Slider {...settings} className="slide-1 home-slider">
          {products
            .filter((val) => {
              if (searchText == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <ProductCard
                  key={val.id}
                  name={val.name}
                  brand={val.brand}
                  price={val.price}
                />
              );
            })}
        </Slider>
      </div>
    </div>
  );
};
