import { useState } from "react";
import Select from "react-select";

const SelectBox = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      placeholder="Order by"
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
};

export default SelectBox;
