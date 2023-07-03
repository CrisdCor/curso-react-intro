import React from "react";
import "./TodoSearch.css";
import searchIcon from "./assets/icons/search-icon.svg";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="search-container">
      <img src={searchIcon} alt="" />
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
