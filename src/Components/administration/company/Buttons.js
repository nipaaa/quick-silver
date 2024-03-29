import React from "react";

const Buttons = ({ setActivePage, handleReferNewCompanyModal,handleInviteModal }) => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-[80px] mt-[40px] mb-[160px] p-[20px]">
      <button
        className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]"
        onClick={() => setActivePage("billingInfo")}
      >
        Billing Information
      </button>
      <button
        onClick={() => handleReferNewCompanyModal()}
        className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]"
      >
        Refer New Company
      </button>
      <button onClick={handleInviteModal} className="px-[34px] py-[14px] rounded-[8px] bg-[#1E4C5A] text-[#FFFFFF] text-[14px] font-[600]">
        Invite New User
      </button>
    </div>
  );
};

export default Buttons;
