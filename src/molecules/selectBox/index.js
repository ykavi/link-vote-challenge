import { useState, useContext } from "react";
import Select from "react-select";
import { getLocalStorageData, setLocalStorageData } from "../../utils";
import { Context } from "../../context/store";
import ENUMS from "../../enums";
import "./select-box.css";

const SelectBox = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [, dispatch] = useContext(Context);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    const linkData = getLocalStorageData(ENUMS.localStorageKey) || [];
    if (selectedOption?.value === "min") {
      linkData.sort((a, b) => {
        if (a.point === b.point) return a.insertDate - b.insertDate;
        return a.point - b.point;
      });
    }
    if (selectedOption?.value === "max") {
      linkData.sort((a, b) => {
        if (b.point === a.point) return b.insertDate - a.insertDate;
        return b.point - a.point;
      });
    }
    setLocalStorageData(ENUMS.localStorageKey, linkData);
    dispatch({ type: "UPDATE_LINK_DATA", payload: linkData });
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
