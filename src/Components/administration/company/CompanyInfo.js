import React from "react";

const CompanyInfo = () => {
  return (
    <div className="p-[30px] bg-[#FAFDFF]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-y-[30px] lg:gap-x-[80px] ">
        <div>
          <label className="inputLabel">
            <span>*</span> Company Name:
          </label>
          <input
            type=""
            name=""
            defaultValue="Quick Silver System. Inc"
            className="inputField"
          />
        </div>
        <div className="flex  items-center">
          <label className="inputLabel lg:mt-10">Current Credits: 1,245</label>
        </div>
        <div className="row-span-2"></div>

        <div>
          <label className="inputLabel">
            <span>*</span> Address 1:
          </label>
          <input
            type=""
            name=""
            defaultValue="2374 Highway K"
            className="inputField"
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Address 2:
          </label>
          <input
            type=""
            name=""
            defaultValue="2374 Highway K"
            className="inputField"
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> City:
          </label>
          <input
            type=""
            name=""
            defaultValue="Hermann"
            className="inputField"
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> State:
          </label>
          <input
            type=""
            name=""
            defaultValue="MO-Missouri"
            className="inputField"
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Zip code:
          </label>
          <input type="" name="" defaultValue="65041" className="inputField" />
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[40px]">
        <button className="px-[46px] py-[17px] rounded-[12px] bg-[#E8ECEF] text-[#191E29] text-[16px] font-[600]">
          Cancel
        </button>
        <button className="px-[52px] py-[17px] rounded-[12px] bg-[#1E4C5A] text-[#FFFFFF] text-[16px] font-[600]">
          Save
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
