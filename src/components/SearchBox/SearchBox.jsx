import React, { useState } from "react";
import filterImg from "../../images/filter.jpg";
import "./searchBox.css";

export default function SearchBox({ filterOnChange,refreshData }) {
  const [inputValue, setInputValue] = useState("");

//   const onChangeInput = (inputValue) => {
//       console.log(inputValue)
//     filterOnChange(inputValue);
//   };

  const onChangeInput = () => {
     if(inputValue.length>0){

         filterOnChange(inputValue);
     }else if(inputValue.length===0){
        refreshData()
     }
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
        // onChange={(e) => onChangeInput(e.target.value)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div class="input-group-append point" >
        <img src={filterImg} style={{ width: "60%" }} alt="Filter" 
        onClick={onChangeInput}
        />
      </div>
    </div>
  );
}
