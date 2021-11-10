import React from "react";

const SearchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }
  return (
    <div>
      <input type="search" value={value} onChange={handleChange} placeholder="digite o anime"/>
    </div>
  );
};

export default SearchInput;
