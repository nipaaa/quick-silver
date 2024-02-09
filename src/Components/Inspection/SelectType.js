import { setType } from "@/features/Inspection/inspectionSlice";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";

const SelectType = ({ onSave }) => {
  const dispatch = useDispatch();

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;

    dispatch(setType(selectedType));
  };

  return (
    <div className="text-center w-full">
      <select
        onChange={handleTypeChange}
        className="max-w-[425px]  h-[55px] mb-[30px]"
      >
        <option value="Property">Property</option>
        <option value="Automobile">Automobile</option>
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
