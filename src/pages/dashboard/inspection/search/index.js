import Results from "@/Components/Inspection/Results";
import Search from "@/Components/Inspection/Search";
import DashboardLayout from "@/Layout/DashboardLayout";
import React from "react";

const PPP = () => {
  return (
    <DashboardLayout>
      <Search />
      <Results />
    </DashboardLayout>
  );
};

export default PPP;
