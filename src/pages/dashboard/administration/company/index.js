import BillingInfo from "@/Components/administration/company/BillingInfo";
import Buttons from "@/Components/administration/company/Buttons";
import CompanyInfo from "@/Components/administration/company/CompanyInfo";
import CompanyTable from "@/Components/administration/company/CompanyTable";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const CompanyPage = () => {
  const [activePage, setActivePage] = useState("main");
  return (
    <DashboardLayout>
      {activePage === "main" && (
        <div>
          <CompanyInfo />
          <CompanyTable />
          <Buttons setActivePage={setActivePage} />
        </div>
      )}
      {activePage === "billingInfo" && (
        <div>
          <BillingInfo setActivePage={setActivePage}/>
        </div>
      )}
    </DashboardLayout>
  );
};

export default CompanyPage;
