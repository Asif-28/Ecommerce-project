import { useContext, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import CloseIcon from "@mui/icons-material/Close";
import ProductContext from "../../context/ProductsContext";

const data = [
  {
    id: 1,
    name: "category1",
    menus: [
      { id: 1, name: "Menu 1.1" },
      { id: 2, name: "Menu 1.2" },
      { id: 3, name: "Menu 1.3" },
      { id: 4, name: "Menu 1.4" },
      { id: 5, name: "Menu 1.5" },
    ],
  },
];

export const LeftPanel = () => {
  const { textHeader, setTextHeader } = useContext(ProductContext);
  const { menu, setMenu } = useContext(ProductContext);

  const [values, setValues] = useState([10, 90]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [orderBy, setOrderBy] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log(checkedItems);
  // console.log(selectedTime);
  // console.log(values)
  // console.log(showMore)
  console.log(selectedItems);

  const clearAll = () => {
    setValues([10, 90]);
    setSelectedTime(null);
    setShowMore(false);
    setCheckedItems([]);
    setSelectedItems([]);
  };

  const handlePriceChange = (newValues) => {
    setValues(newValues);
  };

  // show more
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleTimeOptionClick = (time) => {
    setSelectedTime(time);
  };

  const items = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
    "Brand 8",
  ];
  const initialItems = items.slice(0, 4);
  const toggleItemSelection = (item) => {
    if (item === "All") {
      // If "All" is clicked, select all items
      setSelectedItems(selectedItems.length === items.length ? [] : items);
    } else {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((i) => i !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };
  const isAllSelected = selectedItems.length === items.length;

  const allItems = [
    "Calvin Kleins",
    "Nike",
    "Adidas",
    "Levi's",
    "Prada",
    "Gucci",
    "Versace",
    "Puma",
    "adibas",
  ];
  const all = "All";

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    const itemName = e.target.value;

    if (itemName === all) {
      if (checked) {
        // If "All" is checked, select all items
        setCheckedItems(allItems);
      } else {
        // If "All" is unchecked, clear all selections
        setCheckedItems([]);
      }
    } else {
      // If an individual checkbox is checked or unchecked
      if (checked) {
        setCheckedItems([...checkedItems, itemName]);
      } else {
        setCheckedItems(checkedItems.filter((item) => item !== itemName));
      }
    }
  };

  const getCheckboxItems = () => {
    const items = showMore ? allItems : allItems.slice(0, 4);
    return items;
  };

  const renderCheckboxItems = () => {
    return getCheckboxItems().map((item, index) => (
      <li key={index}>
        <input
          type="checkbox"
          value={item}
          checked={checkedItems.includes(item)}
          onChange={handleCheckboxChange}
        />
        {item}
      </li>
    ));
  };

  return (
    <div className="md:shadow-md md:px-4  ">
      <div className="section py-20 hidden md:block">
        <div className="category cursor-pointer">
          {data.map((item) => (
            <div className="section flex flex-col" key={item.id}>
              <h3
                onClick={() => setTextHeader(item.name)}
                className="py-1 pb-4 font-medium text-[18px]"
              >
                {item.name}
              </h3>
              <ul className=" text-[.9rem] cursor-pointer pb-6">
                {item.menus.map((menu) => (
                  <li
                    onClick={() => setMenu(menu.name)}
                    className="mb-[3px]"
                    key={menu.id}
                  >
                    {menu.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="max-w-[200px] px-4" />
        <div>
          <h1 className="py-2">Brands</h1>
          <ul>
            <li className="mb-1">
              <input
                type="checkbox"
                value={all}
                checked={checkedItems.length === allItems.length}
                onChange={handleCheckboxChange}
              />
              All
            </li>
            {renderCheckboxItems()}
          </ul>
          <button className="underline pb-4" onClick={handleShowMoreClick}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
        <div>
          <h2 className="py-2">Delivery time options</h2>
          <ul className="flex gap-3 pb-6">
            <button
              className={`${
                selectedTime === 3
                  ? "bg-black text-white"
                  : "bg-white text-gray"
              } border rounded-md border-gray-900 py-1 w-[30px]`}
              onClick={() => handleTimeOptionClick(3)}
            >
              3
            </button>
            <button
              className={`${
                selectedTime === 5
                  ? "bg-black text-white"
                  : "bg-white text-gray"
              } border rounded-md border-gray-900 py-1 w-[30px]`}
              onClick={() => handleTimeOptionClick(5)}
            >
              5
            </button>
            <button
              className={`${
                selectedTime === 7
                  ? "bg-black text-white"
                  : "bg-white text-gray"
              } border rounded-md border-gray-900 py-1 w-[30px]`}
              onClick={() => handleTimeOptionClick(7)}
            >
              7
            </button>
            <button
              className={`${
                selectedTime === 10
                  ? "bg-black text-white"
                  : "bg-white text-gray"
              } border rounded-md border-gray-900 py-1 w-[30px]`}
              onClick={() => handleTimeOptionClick(10)}
            >
              10
            </button>
          </ul>
        </div>
        <div className="price flex flex-col items-start pb-6">
          <h1 className="py-2 pb-6">Price Range</h1>
          <div>
            <div className="flex items-center justify-center">
              <Range
                step={1}
                min={0}
                max={100}
                values={values}
                onChange={handlePriceChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "230px",
                      minWidth: "100px",
                      maxWidth: "300px",
                      borderRadius: "100px",
                      background: getTrackBackground({
                        values,
                        colors: ["lightgray", "#0074D9", "lightgray"],
                        min: 0,
                        max: 100,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "16px",
                      width: "16px",
                      backgroundColor: "#0074D9",
                      borderRadius: "50%",
                    }}
                  />
                )}
              />
            </div>
            <div className="flex justify-between text-gray-600 pt-3">
              <output className="flex items-center justify-center mr-3">
                ${values[0]}
              </output>
              <output className="flex items-center justify-center ml-3">
                ${values[1]}
              </output>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button
            onClick={clearAll}
            className="clear border border-gray-900 px-[2px] py-1 w-[80px] rounded-md text-[14px] sm:text-[15px]"
          >
            Clear ALL
          </button>
          <button className="clear border border-gray-900 px-[2px] py-1 w-[80px] rounded-md text-[14px] sm:text-[15px]">
            Apply
          </button>
        </div>
      </div>

      {/* Mobile view  */}
      <div className="md:hidden bg-[#fff]">
        <h1 className="text-[16px] font-semibold pl-3 py-3">
          {textHeader} &gt; {menu}{" "}
        </h1>
        <div className="h-[1px] bg-black mt- overflow-x-hidden" />
        <div
          style={{
            transform: openMenu ? "translateY(0)" : "translateY(-100%)",
            transition: "all 0.3s ease-out",
          }}
          className="px-3 "
        >
          {openMenu && (
            <div
              style={{
                transform: openMenu ? "translateY(0)" : "translateY(-100%)",
                transition: "all 0.3s ease-out",
              }}
            >
              <div className="flex py-5 justify-between pl-3">
                <div className="flex gap-5">
                  <button
                    onClick={clearAll}
                    className="clear border border-gray-900 px-[2px] py-2 w-[80px] rounded-md text-[14px]"
                  >
                    Clear ALL
                  </button>
                  <button className="clear border border-gray-900 px-[2px] py-1 w-[80px] rounded-md text-[14px]">
                    Apply
                  </button>
                </div>
                <CloseIcon
                  className="mr-4"
                  sx={{ fontSize: "2rem" }}
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                />
              </div>
              <div>
                <h2 className="text-[15px] mb-2 pl-2">Order By</h2>
                <ul className="cursor-pointer">
                  <li
                    onClick={() => {
                      setOrderBy("Price Low To high");
                    }}
                    className="text-[14px] px-5 py-1"
                  >
                    Price Low To high
                  </li>
                  <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />

                  <li
                    onClick={() => {
                      setOrderBy("Price High To Low");
                    }}
                    className="text-[14px] px-5 py-1"
                  >
                    Price High To Low
                  </li>
                  <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />

                  <li
                    onClick={() => {
                      setOrderBy("Popularity");
                    }}
                    className="text-[14px] px-5 py-1"
                  >
                    Popularity
                  </li>
                  <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />

                  <li
                    onClick={() => {
                      setOrderBy("Newest");
                    }}
                    className="text-[14px] px-5 py-1"
                  >
                    Newest
                  </li>
                  <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />

                  <li
                    onClick={() => {
                      setOrderBy("Top Stars");
                    }}
                    className="text-[14px] px-5 py-1"
                  >
                    Top Stars
                  </li>
                  <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />
                </ul>
              </div>
              <div>
                <h1 className="pt-3 pb-1 pl-2 text-[15px]">Brands</h1>
                <ul className="flex flex-wrap mx-[0 auto] max-w-[350px] text-[14px]">
                  <li
                    onClick={() => toggleItemSelection("All")}
                    className={`${
                      isAllSelected
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } border border-gray-900 py-[.2rem] px-2 rounded-md mx-2 my-1 cursor-pointer flex items-center justify-center`}
                  >
                    All
                  </li>
                  {showMore
                    ? items.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => toggleItemSelection(item)}
                          className={`${
                            selectedItems.includes(item)
                              ? "bg-black text-white"
                              : "bg-white text-black"
                          } border border-gray-900 py-[.2rem] px-2 rounded-md mx-2 my-1 cursor-pointer flex items-center justify-center`}
                        >
                          {item}
                        </li>
                      ))
                    : initialItems.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => toggleItemSelection(item)}
                          className={`${
                            selectedItems.includes(item)
                              ? "bg-black text-white"
                              : "bg-white text-black"
                          } border border-gray-900 py-[.2rem] px-2 rounded-md mx-2 my-1 cursor-pointer flex items-center justify-center`}
                        >
                          {item}
                        </li>
                      ))}
                </ul>
                <button
                  className="underline pt-2 pb-4 text-[13px] pl-2"
                  onClick={handleShowMoreClick}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              </div>
              <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />

              <div>
                <h2 className="py-2 pl-2 text-[15px]">Delivery time options</h2>
                <ul className="flex gap-3 pb-6 pl-2">
                  <button
                    className={`${
                      selectedTime === 3
                        ? "bg-black text-white"
                        : "bg-white text-gray"
                    } border rounded-md border-gray-900 py-1 w-[30px]`}
                    onClick={() => handleTimeOptionClick(3)}
                  >
                    3
                  </button>
                  <button
                    className={`${
                      selectedTime === 5
                        ? "bg-black text-white"
                        : "bg-white text-gray"
                    } border rounded-md border-gray-900 py-1 w-[30px]`}
                    onClick={() => handleTimeOptionClick(5)}
                  >
                    5
                  </button>
                  <button
                    className={`${
                      selectedTime === 7
                        ? "bg-black text-white"
                        : "bg-white text-gray"
                    } border rounded-md border-gray-900 py-1 w-[30px]`}
                    onClick={() => handleTimeOptionClick(7)}
                  >
                    7
                  </button>
                  <button
                    className={`${
                      selectedTime === 10
                        ? "bg-black text-white"
                        : "bg-white text-gray"
                    } border rounded-md border-gray-900 py-1 w-[30px]`}
                    onClick={() => handleTimeOptionClick(10)}
                  >
                    10
                  </button>
                  <span className="flex justify-center items-center text-[14px]">
                    Days
                  </span>
                </ul>
              </div>
              <div className="h-[2px] max-w-[330px] bg-gray-200 rounded-3xl " />
              <div className="price flex flex-col items-start pb-6">
                <h1 className="py-2 pb-3 pl-2 text-[15px]">Price Range</h1>
                <div>
                  <div className="flex items-center justify-center">
                    <Range
                      step={1}
                      min={0}
                      max={100}
                      values={values}
                      onChange={handlePriceChange}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "6px",
                            width: "280px",
                            minWidth: "100px",
                            maxWidth: "400px",
                            borderRadius: "100px",
                            background: getTrackBackground({
                              values,
                              colors: ["lightgray", "#0074D9", "lightgray"],
                              min: 0,
                              max: 100,
                            }),
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            backgroundColor: "#0074D9",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-between text-gray-600 pt-3">
                    <output className="flex items-center justify-center mr-3 text-[14px]">
                      ${values[0]}
                    </output>
                    <output className="flex items-center justify-center ml-3 text-[14px]">
                      ${values[1]}
                    </output>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!openMenu && (
          <div className="flex items-center justify-end pr-4 mt-3">
            <div className=" flex gap-3 pr-2">
              <img
                className="max-w-[28px] max-h-[28px]"
                src="/images/list/listview_01.png"
                alt=""
              />
              <img
                className="max-w-[28px] max-h-[28px]"
                src="/images/list/listview_02.png"
                alt=""
              />
            </div>
            <button
              className="border border-gray-900 px-3 py-1 rounded-lg"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
