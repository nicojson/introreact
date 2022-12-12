import React from "react";
import { TodoContext } from "../TodoContext";
import './todoSearch.css';
import { BiSearchAlt2 } from 'react-icons/bi';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onInputSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar-container">
      <div className="wrapper-search-bar">
        <input 
          className="search-bar" 
          placeholder="cebolla" 
          type="text"
          value={searchValue}
          onInput={onInputSearch} 
        />
        <span className="icon-search"> <BiSearchAlt2 /> </span>
      </div>
    </div>
  );
}

export { TodoSearch };