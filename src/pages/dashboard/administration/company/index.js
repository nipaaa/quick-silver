import BillingInfo from "@/Components/administration/company/BillingInfo";
import Buttons from "@/Components/administration/company/Buttons";
import CompanyInfo from "@/Components/administration/company/CompanyInfo";
import CompanyTable from "@/Components/administration/company/CompanyTable";
import CustomModal from "@/Components/Shared/Modal/CustomModal";
import { useGetMyCompanyInfoQuery } from "@/features/Company/companyApi";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CompanyPage = () => {
  const [activePage, setActivePage] = useState("main");
  const { user } = useSelector((state) => state.auth);

  const { data } = useGetMyCompanyInfoQuery(user?.companyId);

  // refer new company modal
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleReferNewCompanyModal = () => {
    openModal();
  };

  const handleReferCompany = () => {
    closeModal();
  };

  // invite new user modal
  const [InviteModalOpen, setInviteModalOpen] = useState(false);

  const openInviteModal = () => setInviteModalOpen(true);
  const closeInviteModal = () => setInviteModalOpen(false);

  const handleInviteModal = () => {
    openInviteModal();
  };

  const handleInviteUser = () => {
    closeInviteModal();
  };

  return (
    <DashboardLayout>
      {activePage === "main" && (
        <div>
          <CompanyInfo user={user} data={data} />
          <CompanyTable user={user} data={data} />
          <Buttons
            setActivePage={setActivePage}
            handleReferNewCompanyModal={handleReferNewCompanyModal}
            handleInviteModal={handleInviteModal}
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
        buttons={true}
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
          <div className="grid grid-cols-2">
            <div className="mt-[20px]">
              <label className="inputLabel">Cell Phone:</label>
              <input
                type="email"
                name=""
                value=""
                placeholder="Enter cell number"
                className="p-[20px]"
              />
            </div>
            <div></div>
          </div>
        </div>
      </CustomModal>
      <CustomModal
        isOpen={InviteModalOpen}
        onClose={closeInviteModal}
        title={"Invite user"}
        submitTitle={"Send Invitation"}
        onSave={handleInviteUser}
        buttons={true}
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
          <div className="grid grid-cols-2 gap-[20px]">
            <div className="mt-[20px]">
              <label className="inputLabel">Cell Phone:</label>
              <input
                type="email"
                name=""
                value=""
                placeholder="Enter cell number"
                className="p-[20px]"
              />
            </div>
            <div className="mt-[20px]">
              <label className="inputLabel">Role:</label>
              <select className="h-[43px]">
                <option selected disabled>
                  Select a user role
                </option>
                <option>fkjkfd</option>
                <option>fkjkfd</option>
                <option>fkjkfd</option>
                <option>fkjkfd</option>
                <option>fkjkfd</option>
              </select>
            </div>
          </div>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
};

export default CompanyPage;
