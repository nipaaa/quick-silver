import BillingInfo from "@/Components/administration/company/BillingInfo";
import Buttons from "@/Components/administration/company/Buttons";
import CompanyInfo from "@/Components/administration/company/CompanyInfo";
import CompanyTable from "@/Components/administration/company/CompanyTable";
import CustomModal from "@/Components/administration/company/Modal/CustomModal";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const CompanyPage = () => {
  const [activePage, setActivePage] = useState("main");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleReferNewCompanyModal = () => {
    openModal();
  };

  const handleReferCompany = () => {
    closeModal();
  };
  return (
    <DashboardLayout>
      {activePage === "main" && (
        <div>
          <CompanyInfo />
          <CompanyTable />
          <Buttons
            setActivePage={setActivePage}
            handleReferNewCompanyModal={handleReferNewCompanyModal}
          />
        </div>
      )}
      {activePage === "billingInfo" && (
        <div>
          <BillingInfo setActivePage={setActivePage} />
        </div>
      )}
      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={"Refer New Company"}
        submitTitle={"Send Referral"}
        onSave={handleReferCompany}
      >
        <div className="mx-auto">
          <div className="flex gap-[20px]">
            <div>
              <label className="inputLabel">First Name:</label>
              <input
                type="text"
                name=""
                value=""
                placeholder="Enter First name"
                className="p-[20px]"
              />
            </div>
            <div>
              <label className="inputLabel">Last Name:</label>
              <input
                type="text"
                name=""
                value=""
                placeholder="Enter last name"
                className="p-[20px]"
              />
            </div>
            <div>
              <label className="inputLabel">
                <span>* </span> Email Address:
              </label>
              <input
                type="email"
                name=""
                value=""
                placeholder="Enter email address"
                className="p-[20px]"
              />
            </div>
          </div>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
};

export default CompanyPage;
