
import React from "react";

const NumberDropdown = ({ onSelect }) => {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

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

  return <select onChange={handleChange}>{generateOptions()}</select>;
};

export default NumberDropdown;
