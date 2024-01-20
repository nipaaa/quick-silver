import React from "react";

const OutBuildingAddNew = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div>
          <label className="fs-6" htmlFor="fname">
            <span>*</span> Name
          </label>
          <input
            className="p-5 h-[unset]"
            type="text"
            Value="Big Machine Shop"
          />
        </div>
        <div>
          <label className="fs-6" htmlFor="email">
            <span>*</span> Length:
          </label>
          <input className="p-5 h-[unset]" type="number" Value="84" />
        </div>
        <div>
          <label className="fs-6" htmlFor="cell">
            <span>*</span> Width:
          </label>
          <input className="p-5 h-[unset]" type="number" Value="57" />
        </div>
        <div className="col-span-3">
          <label className="fs-6" htmlFor="fname">
            Location:
          </label>
          <input
            className="p-5 h-[unset]"
            type="text"
            Value="Gravida auctor urna pellentesque commodo. Pharetra mauris malesuada arcu neque."
          />
        </div>
      </div>
    </form>
  );
};

export default OutBuildingAddNew;
