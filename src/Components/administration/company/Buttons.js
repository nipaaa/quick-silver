import React from "react";

const Buttons = () => {
  return (
    <div className="flex gap-[80px] mt-[40px] mb-[160px] p-[20px]">
      <button className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]">
        Billing Information
      </button>
      <button className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]">
        Refer New Company
      </button>
      <button className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]">
        Invite New User
      </button>
    </div>
  );
};

export default Buttons;
