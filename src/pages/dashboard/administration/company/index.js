import Buttons from "@/Components/administration/company/Buttons";
import CompanyInfo from "@/Components/administration/company/CompanyInfo";
import CompanyTable from "@/Components/administration/company/CompanyTable";
import DashboardLayout from "@/Layout/DashboardLayout";
import React from "react";

const CompanyPage = () => {
  return (
    <DashboardLayout>
      <div>
        <CompanyInfo />
        <CompanyTable />
        <Buttons />
      </div>
    </DashboardLayout>
  );
};

export default CompanyPage;
