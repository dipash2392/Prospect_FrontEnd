import React, { useState } from "react";
import filterImg from "../../images/filter.jpg";
import "./searchBox.css";

export default function SearchBox({ filterOnChange }) {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (inputValue) => {
      console.log(inputValue)
    filterOnChange(inputValue);
  };

  return (
    <div class="input-group margin">
      <input
        type="text"
        class="form-control-placeholdericon"
        aria-label="Default"
        placeholder=" &#xF002; Search by Name"
        aria-describedby="inputGroup-sizing-default"
        name="searchQuery"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <div class="input-group-append point" >
        <img src={filterImg} style={{ width: "60%" }} alt="Filter" />
      </div>
    </div>
  );
}
