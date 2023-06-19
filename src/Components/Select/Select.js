import React from "react";
import "./select.css";
const Select = () => {
  return (
    <>
      <select name="cars" id="cars" className="Select">
        <option value="volvo">Volvo</option>
        <option value="saab">BMW</option>
        <option value="opel">Toyota</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
};

export default Select;
