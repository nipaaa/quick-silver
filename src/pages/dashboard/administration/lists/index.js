
import CustomModal from "@/Components/Shared/Modal/CustomModal";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const CompanyLists = () => {
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
      <div>
        <div>
          <p className="text-[#1E4C5A] font-[600] pl-[30px] pt-[31px] pb-[15px]">
            Policy Holder List
          </p>
          <table className="fs_14">
            <thead>
              <tr>
                <th className="text-start">ID</th>
                <th className="text-start">Display Value</th>
                <th className="text-start">Comment/Note Visible</th>
                <th className="text-start">Comment/Note Required</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "#FF6B0D" }}>Bent Oak Mutual</td>
                <td>F</td>
                <td>F</td>
                <td className="text-center">1/1/1900</td>
                <td className="text-center">1/1/2100</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={handleReferNewCompanyModal}
            className="search_btn mt-[40px] ml-[30px]"
          >
            Add New
          </button>
        </div>
        <div>
          <p className="text-[#1E4C5A] font-[600] pl-[30px] pt-[31px] pb-[15px]">
            Add On List
          </p>
          <table className="fs_14">
            <thead>
              <tr>
                <th className="text-start">ID</th>
                <th className="text-start">Display Value</th>
                <th className="text-start">Comment/Note Visible</th>
                <th className="text-start">Comment/Note Required</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "#FF6B0D" }}>Detailed Roof addr</td>
                <td>F</td>
                <td>F</td>
                <td className="text-center">1/1/1900</td>
                <td className="text-center">1/1/2100</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={handleReferNewCompanyModal}
            className="search_btn mt-[40px] ml-[30px]"
          >
            Add New
          </button>
        </div>
        <div>
          <p className="text-[#1E4C5A] font-[600] pl-[30px] pt-[31px] pb-[15px]">
            Hazard List
          </p>
          <table className="fs_14">
            <thead>
              <tr>
                <th className="text-start">ID</th>
                <th className="text-start">Display Value</th>
                <th className="text-start">Comment/Note Visible</th>
                <th className="text-start">Comment/Note Required</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "#FF6B0D" }}>Aggressive Dogs</td>
                <td>F</td>
                <td>F</td>
                <td className="text-center">1/1/1900</td>
                <td className="text-center">1/1/2100</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={handleReferNewCompanyModal}
            className="search_btn mt-[40px] ml-[30px]"
          >
            Add New
          </button>
        </div>

        <div className="p-[30px]">
          <p className="text-[#1E4C5A] font-[600] pb-[15px]">
            Default SMS Message
          </p>
          <div className="border border-dashed border-[#FF6B0D] p-5 mb-[30px]">
            <p>
              <span className="text-[#FF6B0D]"> Message: </span>
              Thank you for using TRI - Trust Risk Inspections.  Our Inspector{" "}
              will be arriving shortly.  Please, put away all animals and be
              prepared to unlock the gate or answer the door when they arrive. 
              If you have any questions, or need to message the inspector DO NOT
              respond to this message. Please call or text and message the
              inspector directly.
            </p>
          </div>
          <button className="search_btn">Save Messages</button>
        </div>
      </div>
      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={"Add / Edit List Item"}
        submitTitle={"Send Invitation"}
        onSave={handleReferCompany}
      >
        <div className="mx-auto">
          <div className="flex gap-[20px]">
            <div>
              <label className="inputLabel">Display Name:</label>
              <input
                type="text"
                name=""
                value=""
                placeholder="Enter First name"
                className="p-[20px]"
              />
            </div>
            <div>
              <label className="inputLabel">Comment/Note Visible:</label>
              <select className="h-[43px]">
                <option>False</option>
                <option>False</option>
                <option>False</option>
              </select>
            </div>
            <div>
              <label className="inputLabel">Comment/Note Required:</label>
              <select className="h-[43px]">
                <option>False</option>
                <option>False</option>
                <option>False</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[20px]">
            <div className="mt-[20px]">
              <label className="inputLabel">Start Date:</label>
              <input
                type="email"
                name=""
                value=""
                placeholder="1/1/1900"
                className="p-[20px]"
              />
            </div>
            <div className="mt-[20px]">
              <label className="inputLabel">End Date:</label>
              <input
                type="email"
                name=""
                value=""
                placeholder="1/12100"
                className="p-[20px]"
              />
            </div>
            <div></div>
          </div>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
};

export default CompanyLists;
