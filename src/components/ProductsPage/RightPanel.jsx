import products from "../../data/dummyProducts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import "./Card.scss";
import ProductContext from "../../context/ProductsContext";

import { useNavigate } from "react-router-dom";
export const RightPanel = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const { textHeader } = useContext(ProductContext);
  const { menu } = useContext(ProductContext);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const [selectedOption, setSelectedOption] = useState("lowToHigh");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(10);

  {
    /* Filter the products to show only the first numberOfItemsToShow items */
  }
  const filteredProducts = products.slice(0, numberOfItemsToShow);
  return (
    <section className="">
      <div className="section pb-8 hidden md:block">
        <div className="banner flex justify-between items-center pt-12">
          <h1 className="text-2xl font-semibold">
            {textHeader} &gt; {menu}{" "}
          </h1>
          <div className=" flex gap-3">
            <img
              className="max-w-[40px]"
              src="/images/list/listview_01.png"
              alt=""
            />
            <img
              className="max-w-[40px]"
              src="/images/list/listview_02.png"
              alt=""
            />
            {/* <h2 className="border border-gray-900 w-[200px] py-1 px-4 flex justify-center items-center md:mr-2">
            Prices: Low to High <ArrowDropDown/>
          </h2> */}
            <div>
              <select
                className="border border-gray-900 w-[200px] py-[.4rem] px-2 flex justify-center items-center md:mr-2"
                id="sortPrice"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="lowToHigh">Price Low to High</option>
                <option value="highToLow">Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
        {/* Desktop Products Cards  */}
        <div
          onClick={() => {
            navigate(`/products/1`);
          }}
          className="item flex flex-col py-8"
        >
          {displayedProducts.map((item) => (
            <div
              key={item.id}
              className="card-size flex items-center transition-all ease-linear shadow-md hover:shadow-lg gap-4 mb-4 rounded-md pl-3 pr-6 md:pl-4 md:pr-12 lg:pl-8 lg:pr-24 py-2"
            >
              <div className="image">
                <img
                  className="w-[140px] h-[140px]"
                  src="/images/product/product_img_06.jpg"
                  alt="item-image"
                />
              </div>
              <div className="details">
                <h2 className="text-base mt-1">{item.name}</h2>
                <h2>{item.brand}</h2>
                <p className="my-2 text-base">${item.price}</p>
                <p className="text-[15px]">{item.description}</p>
                <div className=" flex gap-3 my-3">
                  <button>
                    <div className="border border-gray-900 rounded-full px-2 py-2">
                      <FavoriteIcon sx={{ fontSize: "1.5rem" }} />
                    </div>
                  </button>
                  <button className="">
                    <div className="border border-gray-900 rounded-full px-3 py-3">
                      <img
                        className="w-[18px]"
                        src="/images/header/shoppingbag.jpg"
                        alt="shopping-bag"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center gap-4 ">
          <button onClick={goToFirstPage}>First {`<`} </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`page-number ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={goToLastPage}> &gt; Last </button>
        </div>
      </div>
      {/* Mobile View  */}
      <div className="mobile md:hidden">
        {/* <h1 className="text-xl font-semibold">Category1 &gt; Menu2 </h1>
    <div className="h-[1px] bg-black mt- overflow-x-hidden" /> */}
        {/* <div className=" flex gap-3">
          <img className="max-w-[40px]" src="/images/list/listview_01.png" alt="" />
          <img className="max-w-[40px]" src="/images/list/listview_02.png" alt="" />
        </div> */}

        {/* Mobile Product Cards  */}
        <div
          onClick={() => {
            navigate(`/products/1`);
          }}
          className="item flex flex-col py-4 px-2"
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="card-size flex items-center transition-all ease-linear shadow-md hover:shadow-lg gap-4 mb-2 rounded-md pl-2 pr-3 py-2"
            >
              <div className="image">
                <img
                  className="w-[80px] h-[80px]"
                  src="/images/product/product_img_06.jpg"
                  alt="item-image"
                />
              </div>
              <div className="details">
                <h2 className="text-[14px] mt-1">{item.name}</h2>
                <h2 className="text-[14px] ">{item.brand}</h2>
                <p className="my-1 text-[14px]">${item.price}</p>
                {/* <p className="text-[13px]">{item.description}</p> */}
                <div className=" flex gap-2 my-2">
                  <button>
                    <div className="border border-gray-900 rounded-full px-[.4rem] py-[.2rem]">
                      <FavoriteIcon sx={{ fontSize: "1rem" }} />
                    </div>
                  </button>
                  <button className="">
                    <div className="border border-gray-900 rounded-full px-[.55rem] py-[.6rem]">
                      <img
                        className="w-[12px]"
                        src="/images/header/shoppingbag.jpg"
                        alt="shopping-bag"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Add a "show more" button to show all items */}
          {products.length > numberOfItemsToShow && (
            <button
              className="my-4 text-center border border-gray-900 px-84 py-2 mx-4"
              onClick={() => setNumberOfItemsToShow(products.length)}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
