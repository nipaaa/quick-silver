import StepOne from "@/Components/Reports/StepOne";
import StepThree from "@/Components/Reports/StepThree";
import StepTwo from "@/Components/Reports/StepTwo";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const Reports = () => {
  const [stepper, setStepper] = useState(1);

  const handleBack = () => {
    if (stepper > 1) {
      setStepper(stepper - 1);
    }
  };
  const handleNext = () => {
    if (stepper < 3) {
      setStepper(stepper + 1);
    }
  };
  return (
    <DashboardLayout>
      <div className="m-4 lg:mx-[70px] lg:my-[50px]">
        {stepper === 1 && <StepOne />}
        {stepper === 2 && <StepTwo />}
        {stepper === 3 && <StepThree />}

        <div className="flex items-center gap-5 justify-between mb-[71px]">
          <button onClick={handleBack} className="cancel_btn ">
            Previous
          </button>
          <button onClick={handleNext} className="search_btn">
            Next{" "}
          </button>
        </div>
        <div className="text-[#191E29] font-normal text-sm text-center">
          <p className="mb-[10px]">
            “Assessments Based on Practical Experience. Liabilities & Hazards
            will be Photographed & Included in Report”
          </p>
          <p>Page {stepper} of 3</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
