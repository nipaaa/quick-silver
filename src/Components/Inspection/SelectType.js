import { TypeContext } from "@/Context/TypeProvider";
import React, { useContext } from "react";

const SelectType = ({ onSave }) => {
  const { setType } = useContext(TypeContext);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);
  };

  return (
    <div className="text-center w-full">
      <select
        onChange={handleTypeChange}
        className="max-w-[425px]  h-[55px] mb-[30px]"
      >
        <option value="property">Property</option>
        <option value="automobile">Automobile</option>
      </select>
      <br />
      <button
        className="search_btn min-w-[140px]"
        type="button"
        onClick={onSave}
      >
        Select
      </button>
    </div>
  );
};

export default SelectType;
