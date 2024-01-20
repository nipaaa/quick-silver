import ReportCard from "@/Utils/ReportCard";
import React from "react";
import ReportTable from "./ReportTable";

const StepOne = () => {

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex  flex-col gap-[10px]">
          <ReportCard label="Insured:" value="James Smith" />
          <ReportCard label="Address" />
          <ReportCard label="Street:" value="2374 Highway K" />
          <ReportCard label="City:" value="Hermann" />

          <div className="flex gap-[10px] items-center">
            <ReportCard label="States:" value="MO" />
            <ReportCard label="Date:" value="02/29/2023" />
          </div>
        </div>
        <div className="flex  flex-col gap-[10px]">
          <ReportCard label="Date:" value="02/29/2023" />
          <ReportCard label="Policy Holder:" value="Bent Oak Mutual" />
          <ReportCard label="Policy:" value="HQ-41321" />
          <ReportCard label="Inspection Type:" value="Dwelling" />
          <ReportCard label="Inspection:" value="Jake M." />
        </div>
      </div>
      <hr className="text-[#BDBBBB] my-5" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-[10px]">
        <ReportCard label="Property Details:" value="Dwelling" />
        <ReportCard label="Yr Built:" value="1954" />
        <ReportCard label="Dwelling Front:" value="SE-Southeast" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-[10px]">
        <ReportCard label="Details Roof Addr:" value="Yes" />
        <ReportCard label="Outbuilding Addr:" value="Yes" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-[10px]">
        <ReportCard label="Occupied:" value="Yes" />
        <ReportCard label="Homeowner Present:" value="Yes" />
        <ReportCard label="Siding Material:" value="Hardboard" />
        <ReportCard label="Stories:" value="1.5" />
        <ReportCard label="Fencing:" value="Yes" />
        <ReportCard label="Measured W:" value="Zillow.com" />
        <ReportCard label="Roof Material:" value="Metal" />
        <ReportCard label="Roof Layers:" value="1" />
        <ReportCard label="Fencing:" value="Yes" />
        <ReportCard label="Fence:" value="Chain Link" />
        <ReportCard label="Roof Condition:" value="Appears Good" />
        <ReportCard label="Eat Age:" value="Unk" />
        <ReportCard label="Outbuilding:" value="Yes" />
        <ReportCard label="Amount:" value="12" />
      </div>
<ReportTable/>

    </div>
  );
};

export default StepOne;
