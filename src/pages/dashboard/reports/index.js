import StepOne from "@/Components/Reports/StepOne";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const Reports = () => {
  const [stepper, setStepper] = useState(1);
  return (
    <DashboardLayout>
      <div className="m-4 lg:mx-[70px] lg:my-[50px]">
        {stepper === 1 && <StepOne />}
      </div>
    </DashboardLayout>
  );
};

export default Reports;
