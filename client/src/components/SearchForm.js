import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  // sets up reference with variable searchValue - initial state is an empty string
  const searchValue = useRef("");

  // function sets searchTerm state (in Context.js) with the current searchValue (input below)
  const searchProduct = () => {
    setSearchTerm(searchValue.current.value.toLowerCase());
  };

  // on page render, focus on the search input
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  // render search form - searchValue referenced in input. When input value changes, call searchProduct to update state with current ref'd value.
  return (
    <div className="search-form">
      <form action="input">
        <input
          type="text"
          placeholder="search"
          id="name"
          ref={searchValue}
          onChange={searchProduct}
        />
      </form>
    </div>
  );
};

export default SearchForm;
