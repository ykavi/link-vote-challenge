import { useState } from "react";
import Select from "react-select";
import "./select-box.css";

const SelectBox = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="select-box-wrapper">
      <Select
        placeholder="Order by"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectBox;
