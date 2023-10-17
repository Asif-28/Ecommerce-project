import FavoriteIcon from "@mui/icons-material/Favorite";
export const ProductCard = ({ brand, name, price }) => {
  return (
    <div className="mr-[1rem]">
      <div className="card cursor-pointer">
        <div className="image relative">
          <img
            className="img"
            src="/images/product/product_img_09.jpg"
            alt=""
          />
          <h3 className="absolute bottom-4 sm:bottom-6 left-2 sm:left-14 bg-gray-100 py-1 sm:py-1 px-1 sm:px-3 text-gray-700 cursor-pointer text-[10.5px] sm:text-[14px] sm:font-light">
            Limited-Time Special
          </h3>
        </div>
        <div className="details flex flex-col md:pl-8 md:pt-4 md:pb-8">
          <div className=" flex items-center justify-center gap-3 my-2">
            <button>
              <div className="border border-gray-900 rounded-full px-2 py-2">
                <FavoriteIcon className="" sx={{ fontSize: "1.4rem" }} />
              </div>
            </button>
            <button>
              <div className="border border-gray-900 rounded-full px-3 py-3">
                <img
                  className="max-w-[14px] max-h-[14px] md:max-w-[18px] md:max-h-[18px]"
                  src="/public/images/header/shoppingbag.jpg"
                  alt="shopping-bag"
                />
              </div>
            </button>
          </div>
          <h1 className="text-[13.5px] md:text-[16px] pt-2 pb-[2px] pl-1 sm:pl-0">
            {name}
          </h1>
          <h1 className="text-[13.5px] md:text-[16px] pl-1 sm:pl-0">{brand}</h1>
          {/* <p className="line-through text-[14px] md:text-[18px] ">KRW 39.50</p> */}
          <p className=" font-medium text-[14px] md:text-[17px] mt-2 sm:mt-2 mb-1 pl-1 sm:pl-0">
            Sale KRW {price}
          </p>
          {/* <p className="font-light text-gray-900 text-[14px] sm:text-base  ">
            Bonus Offers with <br /> Purchase
          </p> */}
        </div>
      </div>
    </div>
  );
};
