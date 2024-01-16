import InspectionHeader from "@/Components/Inspection/InspectionHeader";
import InspectionTab from "@/Components/Inspection/InspectionTab";
import InspectionTable from "@/Components/Inspection/InspectionTable";
import DashboardLayout from "@/Layout/DashboardLayout";
import React from "react";

const EditInspection = () => {
  return (
    <DashboardLayout>
      <InspectionHeader />
      <InspectionTable />
      <InspectionTab />
    </DashboardLayout>
  );
};

export default EditInspection;
