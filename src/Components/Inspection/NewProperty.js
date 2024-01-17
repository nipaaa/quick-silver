import React from "react";
import check from "../../assets/tickCheck.svg";
import Image from "next/image";

const NewProperty = () => {
  return (
    <div className="max-w-[509px] w-full">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[60px] mb-[30px]">
          <div>
            <label className="fs-6" htmlFor="details">
              <span>*</span> Property Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Dwelling  "
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="year">
              <span>*</span> Year Built
            </label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="Dwelling  "
            />
          </div>
        </div>
        <div className="col-span-2 border border-dashed border-[#FF6B0D] p-5 mb-[30px]">
          <p className="font-semibold mb-5">Add ons:</p>
          <div className="flex items-center gap-4 mb-4">
            <Image src={check} height={19} width={19} alt="check" />
            <p className="text-[#191E29] font-normal">Detailed Roof Adder</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={check} height={19} width={19} alt="check" />
            <p className="text-[#191E29] font-normal">Outbuilding Adder</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[60px] mb-[30px]">
          <div>
            <label className="fs-6" htmlFor="occupied">
              <span>*</span> Occupied:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="owner">
              <span>*</span> Homeowner Present:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-between">
          <div className="flex gap-4 items-center btn_set">
            <button className="cancel_btn fs-6">Cancel</button>
            <button className="search_btn fs-6">Save</button>
          </div>
          <button className="search_btn fs-6">Send Assignment</button>
        </div>
      </form>
    </div>
  );
};

export default NewProperty;
