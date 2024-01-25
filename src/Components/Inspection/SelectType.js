import { TypeContext } from "@/Context/TypeProvider";
import React, { useContext } from "react";

const SelectType = () => {
  const { setType } = useContext(TypeContext);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);
  };

  return (
    <select onChange={handleTypeChange} className="max-w-[425px] h-[55px]">
      <option value="property">Property</option>
      <option value="automobile">Automobile</option>
    </select>
  );
};

export default SelectType;
