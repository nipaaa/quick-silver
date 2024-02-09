import { useUpdateCompanyInfoMutation } from "@/features/Company/companyApi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CompanyInfo = ({ user, data }) => {
  const [updateCompanyInfo, { isLoading }] = useUpdateCompanyInfoMutation();

  const { push } = useRouter();

  const [companyBasicInfo, setCompanyBasicInfo] = useState({});
  const [editInfo, setEditInfo] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditInfo({ ...editInfo, [name]: value });
    setCompanyBasicInfo({ ...companyBasicInfo, [name]: value });
  };

  const handleSave = async () => {
    try {
      var formData = new FormData();

      Object.entries(editInfo)?.forEach(([key, value]) => {
        formData.append(key, value);
      });
      const res = await updateCompanyInfo({
        id: user?.companyId,
        data: formData,
      });
      if (res?.error?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.error}`,
        });
      }
      if (res?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.data?.message}`,
        });
      }
      if (res?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Susscessfull!",
          text: `${res?.data?.message}`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };

  useEffect(() => {
    const info = {
      companyName: data?.companyInfo?.companyName,
      currentCredits: data?.companyInfo?.currentCredits,
      city: data?.companyInfo?.city,
      firstAddress: data?.companyInfo?.firstAddress,
      lastAddress: data?.companyInfo?.lastAddress,
      logo: data?.companyInfo?.logo,
      phone: data?.companyInfo?.phone,
      state: data?.companyInfo?.state,
      zipCode: data?.companyInfo?.zipCode,
    };
    setCompanyBasicInfo(info);
  }, [data]);

  return (
    <div className="p-[30px] bg-[#FAFDFF]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-y-[30px] lg:gap-x-[80px] ">
        <div>
          <label className="inputLabel">
            <span>*</span> Company Name:
          </label>
          <input
            type="text"
            name="companyName"
            value={companyBasicInfo?.companyName}
            className="inputField"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex  items-center col-span-2">
          <label className="inputLabel lg:mt-10">Current Credits: 1,245</label>
        </div>
        {/* <div className="row-span-2"></div> */}
        {/* <div></div> */}
        <div>
          <label className="inputLabel">
            <span>*</span> Company Phone:
          </label>
          <input
            type="tel"
            name="phone"
            // defaultValue="Quick Silver System. Inc"
            placeholder="(888) 123-1234."
            className="inputField"
            value={companyBasicInfo?.phone}
            maxLength={10}
            minLength={1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Address 1:
          </label>
          <input
            type="text"
            name="firstAddress"
            className="inputField"
            value={companyBasicInfo?.firstAddress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Address 2:
          </label>
          <input
            type="text"
            name="lastAddress"
            value={companyBasicInfo?.lastAddress}
            className="inputField"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> City:
          </label>
          <input
            type="text"
            name="city"
            value={companyBasicInfo?.city}
            className="inputField"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> State:
          </label>
          <input
            type="text"
            name="state"
            value={companyBasicInfo?.state}
            className="inputField"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Zip code:
          </label>
          <input
            type="text"
            name="zipCode"
            value={companyBasicInfo?.zipCode}
            className="inputField"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[40px]">
        <button
          className="px-[46px] py-[17px] rounded-[12px] bg-[#E8ECEF] text-[#191E29] text-[16px] font-[600]"
          type="button"
          onClick={() => push("/dashboard")}
        >
          Cancel
        </button>
        <button
          className="px-[52px] py-[17px] rounded-[12px] bg-[#1E4C5A] text-[#FFFFFF] text-[16px] font-[600]"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
