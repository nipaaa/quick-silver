import React from "react";

const EditList = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-3 gap-[20px]">
        <div>
          <label className="inputLabel">Type:</label>
          <select className="h-[43px]">
            <option>Automobile</option>
            <option>Property</option>
          </select>
        </div>
        <div>
          <label className="inputLabel">Display Name:</label>
          <input
            type="text"
            placeholder="Enter First name"
            className="p-[20px]"
          />
        </div>
        <div>
          <label className="inputLabel">Comment/Note Visible:</label>
          <select className="h-[43px]">
            <option>False</option>
            <option>False</option>
            <option>False</option>
          </select>
        </div>
        <div>
          <label className="inputLabel">Comment/Note Required:</label>
          <select className="h-[43px]">
            <option>False</option>
            <option>False</option>
            <option>False</option>
          </select>
        </div>

        <div>
          <label className="inputLabel">Start Date:</label>
          <input type="email" placeholder="1/1/1900" className="p-[20px]" />
        </div>
        <div>
          <label className="inputLabel">End Date:</label>
          <input type="email" placeholder="1/12100" className="p-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default EditList;
