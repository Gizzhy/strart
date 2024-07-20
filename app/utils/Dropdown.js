import React from "react";

const NumberDropdown = ({ selectedNumber, handleChange }) => {
  const generateOptions = () => {
    const options = [];
    for (let i = 10; i <= 50; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <select id="numberDropdown" value={selectedNumber} onChange={handleChange}>
      {generateOptions()}
    </select>
  );
};

export default NumberDropdown;
