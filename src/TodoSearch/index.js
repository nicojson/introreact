import React from "react";
import './todoSearch.css';
import { BiSearchAlt2 } from 'react-icons/bi';

function TodoSearch({searchValue, setSearchValue}) {

  const onInputSearch = (event) => {
    console.log(event.target.value)
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