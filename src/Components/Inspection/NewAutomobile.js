import React from "react";
import check from "../../assets/tickCheck.svg";
import Image from "next/image";

const NewAutomobile = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[60px]">
          <div>
            <label className="fs-6" htmlFor="details">
              <span>*</span> Year Built
            </label>
            <input type="number" placeholder="1998  " />
          </div>
          <div>
            <label className="fs-6" htmlFor="year">
              <span>*</span> Manufacturer
            </label>
            <input type="text" placeholder="German automaker  " />
          </div>

          <div>
            <label className="fs-6" htmlFor="front">
              <span>*</span> Model:
            </label>
            <input type="text" placeholder="BMW" />
          </div>
          <div>
            <label className="fs-6" htmlFor="front">
              <span>*</span> Color
            </label>
            <input type="text" placeholder="Black" />
          </div>

          <div className="lg:col-span-2 border border-dashed border-[#FF6B0D] p-5 mb-4">
            <p className="font-semibold mb-5">Add ons:</p>
            <div className="flex items-center gap-4 mb-4">
              <Image src={check} height={19} width={19} alt="check" />
              <p className="text-[#191E29] font-normal">Carfax Addon</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[56px]">
          <div className="flex gap-4 items-center btn_set">
            <button className="cancel_btn fs-6">Cancel</button>
            <button className="search_btn fs-6 w-[140px]">Save</button>
          </div>
          <button className="search_btn fs-6">Send Assignment</button>
        </div>
      </form>
    </div>
  );
};

export default NewAutomobile;
