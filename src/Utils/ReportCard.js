import React from "react";

const ReportCard = ({ label, value }) => {
  return (
    <div className="bg-[#FAFDFF] p-5 flex items-center gap-[23px] text-[#191E29] w-full">
      <p className="font-semibold">{label}</p>
      <p className="text-sm font-normal">{value} </p>
    </div>
  );
};

export default ReportCard;