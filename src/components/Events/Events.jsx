import { events } from "../../data/dummyData";
import categories from "../../data/dummyCategories";
import { useState } from "react";
export const Events = () => {
  // const [menuItems, setMenuItems] = useState(["English"]);

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="section flex gap-6 sm:justify-evenly py-4 cursor-pointer px-[.7rem] sm:px-0">
      <h1
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="text-base sm:text-xl font-medium hidden md:block"
      >
        By Category
        {/* {menuItems} */}
        {hovered && (
          <div className="md:h-[72vh]  xl:h-[76vh] ">
            <div className="absolute -left-[1.2rem] font-normal md:grid grid-cols-5 gap-x-14 md:gap-x-20 gap-y-4 text-xl px-5 pb-5 pt-2 bg-[#fff] w-[100vw] ">
              {categories.map((category) => (
                <div className="section flex flex-col" key={category.id}>
                  <h3 className="py-1">{category.name}</h3>
                  <ul className="pl-4 text-[1rem]">
                    {category.menus.map((menu) => (
                      <li key={menu.id}>{menu.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </h1>
      <div className="flex overflow-x-scroll sm:overflow-auto gap-10 sm:gap-8 md:gap-14 text-[16px] sm:text-[18px] xl:text-base font-normal cont">
        {events.map((item) => {
          return (
            <div key={item.id} className="">
              <p className="whitespace-nowrap">{item.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
