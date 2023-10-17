import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
// import SearchIcon from "@mui/icons-material/Search";
import categories from "../../data/dummyCategories";
import SearchContext from "../../context/SearchContext";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import CartContext from "../../context/CartContext";
export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { cartNo } = useContext(CartContext);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const renderCategories = () => {
    return categories.map((category) => (
      <>
        <li
          onClick={() => handleCategoryClick(category)}
          className="flex justify-between items-center pr-8"
          key={category.id}
        >
          <button
            onClick={() => handleCategoryClick(category)}
            className={`
          ${category.id === selectedCategory?.id ? "active" : ""}
          text-black font-medium py-2 px-4 rounded `}
          >
            {category.name}
          </button>
          <ArrowForwardIosIcon sx={{ fontSize: ".8rem" }} />
        </li>
        <hr />
      </>
    ));
  };

  const renderMenus = () => {
    if (!selectedCategory) {
      return;
    }

    const menus = selectedCategory.menus;

    return (
      <div
        className={`absolute top-0 bg-[#fff] w-full min-h-[60vh] py-4 px-6 ${
          selectedCategory?.id ? "block" : "hidden"
        }
        `}
      >
        <ul>
          {menus.map((menu) => (
            <>
              <li className="mb-[.3rem]" key={menu.id}>
                {menu.name}
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    );
  };

  const { searchText, setSearchText } = useContext(SearchContext);

  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [showLanguage, setShowLanguage] = useState("English");
  const [showCurrency, setShowCurrency] = useState("USD");

  // const [activeLang, setActiveLang] = useState(false);

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleSave = () => {
    setShowLanguage(language);
    setShowCurrency(currency);
  };
  const showMenu = () => {
    setActive(true);
  };

  return (
    <div className="z-40 sticky top-[42px] sm:top-[45px] bg-[#fff]">
      <div className="section md:flex justify-center gap-3 lg:gap-9 items-center max-h-[80px] py-3 hidden ">
        <div className="logo ">
          <img
            className="md:min-w-[60px] max-w-[90px]"
            src="images/header/logo.png"
            alt="logo"
          />
        </div>
        <div className="right flex justify-center items-center gap-2 lg:gap-5">
          <input
            className="border border-gray-500 pl-5 pr-3 py-[.4rem] md:w-[380px] lg:w-[600px] focus:outline-none"
            type="search"
            placeholder="SEARCH:"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <h1
            className=" border border-black sm:w-[140px] py-[.6rem] flex justify-center items-center cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {showLanguage}/{showCurrency} <ArrowDropDownOutlinedIcon />
            {hovered && (
              <div className="absolute top-[3.9rem] bg-white py-2 px-6 shadow-lg">
                <div className="mb-6">
                  <div>
                    <h2 className="mb-2">Language</h2>
                    <select
                      className="border border-gray-900 w-[200px] py-2 px-2"
                      value={language}
                      onChange={handleLanguageChange}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                  </div>
                  <div>
                    <h2 className="my-2">Currency</h2>
                    <select
                      className="border border-gray-900 w-[200px] py-2 px-2"
                      value={currency}
                      onChange={handleCurrencyChange}
                    >
                      <option value="USD">USD (US Dollar)</option>
                      <option value="EUR">EUR (Euro)</option>
                      <option value="GBP">GBP (British Pound)</option>
                      <option value="JPY">JPY (Japanese Yen)</option>
                    </select>
                  </div>
                  <button
                    className="mt-5 border border-gray-900 w-[100%] px-2 py-1"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </h1>
          <div className="bg-red-500 flex py-[.4rem] px-4 justify-center items-center rounded-3xl">
            <img
              className="max-w-[25px] bg-red-500"
              src="/images/header/shoppingbag.jpg"
              alt=""
            />
            <span className="text-[#fff] text-[18px] ml-[2px]">{cartNo}</span>
          </div>

          <img
            className="max-w-[35px]"
            src="/images/header/myaccount.png"
            alt=""
          />
        </div>
      </div>

      {/* Mobile View  */}

      <div className="flex justify-between items-center gap-8 px-2 relative md:hidden">
        <div className="ham flex justify-center items-center gap-4">
          <div>
            <MenuIcon sx={{ fontSize: "2.3rem" }} onClick={showMenu} />
          </div>
          <div className="logo  max-w-[70px]">
            <img
              className=" min-w-[65px]"
              src="images/header/logo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 py-1 ">
          <h1
            className=" z-30 border border-black sm:w-[100px] text-[15px] sm:text-base py-[.5rem] px-[.5rem] mt-1 flex justify-center items-center cursor-pointer rounded-full"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            // onClick={() => setActiveLang(true)}
          >
            {showLanguage == "English" ? "EN" : showLanguage}/{showCurrency}
            {hovered && (
              <div className="absolute top-[3.5rem] bg-white py-4 px-6 ">
                <div className="mb-6">
                  <div>
                    <h2 className="mb-2">Language</h2>
                    <select
                      className="border border-gray-900 w-[200px] py-2 px-2"
                      value={language}
                      onChange={handleLanguageChange}
                    >
                      <option value="EN">ENGLISH</option>
                      <option value="SP">SPANISH</option>
                      <option value="FR">FRENCH</option>
                      <option value="GE">GERMAN</option>
                    </select>
                  </div>
                  <div>
                    <h2 className="my-2">Currency</h2>
                    <select
                      className="border border-gray-900 w-[200px] py-2 px-2"
                      value={currency}
                      onChange={handleCurrencyChange}
                    >
                      <option value="USD">USD </option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                  <button
                    className="mt-4 border border-gray-900 w-[100%] px-2 py-1"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </h1>

          <img
            className="max-w-[26px]"
            src="/images/header/shoppingbag.jpg"
            alt=""
          />

          <img
            className="max-w-[28px]"
            src="/images/header/myaccount.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-[1px] bg-black mt-2 overflow-x-hidden md:hidden " />
      <div className="search py-2 px-5 flex justify-center items-center md:hidden ">
        <input
          className="border border-gray-900 pl-5 pr-3 py-2 w-[100%] focus:outline-none rounded-md relative"
          type="search"
          placeholder="SEARCH"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <SearchIcon className="absolute top-4 right-20" /> */}
      </div>
      <div
        style={{
          transform: active ? "translateX(0)" : "translateX(-100%)",
          transition: "all 0.3s ease-out",
        }}
        className="  w-[240px] absolute top-[4.28rem] "
      >
        <div className="close flex flex-row-reverse justify-between pr-3 bg-[#fff] pb-2  ">
          <CloseIcon
            sx={{ fontSize: "2rem" }}
            onClick={() => {
              setActive(!active);
              setSelectedCategory(null);
            }}
          />
          {selectedCategory?.id ? (
            <ArrowBackIosOutlinedIcon
              sx={{
                fontSize: "1.6rem",
                marginTop: ".3rem",
                marginLeft: ".3rem",
              }}
              onClick={() => setSelectedCategory(null)}
            />
          ) : (
            ""
          )}
        </div>

        {/* List of menus in each categories  */}
        <div className="relative">
          <div className="bg-white min-h-[calc(100vh-150px)]">
            <ul>{renderCategories()}</ul>
          </div>
          <div>{renderMenus()}</div>
        </div>
      </div>
      <div className="h-[1px] bg-black mt- overflow-x-hidden" />
    </div>
  );
};
