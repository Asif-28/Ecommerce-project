import React from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
