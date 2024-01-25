import insured from "../../assets/insured.png";
import insuredActive from "../../assets/insured-active.png";
import property from "../../assets/property.png";
import propertyActive from "../../assets/property-active.png";
import inspection from "../../assets/inspection-org.png";
import automobile from "../../assets/automobile.png";
import automobileActive from "../../assets/automobile-active.png";
import { useContext, useEffect, useState } from "react";

import Image from "next/image";
import NewInsured from "./NewInsured";
import NewProperty from "./NewProperty";
import CustomModal from "../Shared/Modal/CustomModal";
import SelectType from "./SelectType";
import { TypeContext } from "@/Context/TypeProvider";
import NewAutomobile from "./NewAutomobile";

const NewInspectionTab = () => {
  const [activeTab, setActiveTab] = useState("Insured");
  const [modalOpen, setModalOpen] = useState(false);
  const { type } = useContext(TypeContext);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const tabs = [
    {
      pic: insured,
      activePic: insuredActive,
      title: "Insured",
    },
    {
      pic: property,
      activePic: propertyActive,
      title: "Property",
      condition: type === "property",
    },
    {
      pic: automobile,
      activePic: automobileActive,
      title: "Automobile",
      condition: type === "automobile",
    },
  ];

  useEffect(() => {
    openModal();
  }, []);

  console.log(activeTab, "active");
  return (
    <div>
      <div className="flex gap-[10px] items-center mt-[45px] ml-[30px]">
        <Image src={inspection} alt="icon" width={16} height={16} />
        <p className="font-medium">Unassigned Inspection</p>
      </div>
      <div className="inspection_tab  overflow-x-auto no_scrollbar flex  items-center gap-8 lg:gap-[70px] border-b border-b-[#fafdff] pt-[64px] pr-[30px] pl-[30px]">
        {tabs.map((data, index) =>
          data.condition !== undefined ? (
            data.condition ? (
              <div
                onClick={() => setActiveTab(data.title)}
                style={{ cursor: "pointer" }}
                className={`flex gap-1 items-center tab ${
                  activeTab === data.title && "active"
                }`}
                key={index}
              >
                <Image
                  src={activeTab === data.title ? data.activePic : data.pic}
                  alt=""
                />
                <p>{data.title}</p>
              </div>
            ) : null
          ) : (
            <div
              onClick={() => setActiveTab(data.title)}
              style={{ cursor: "pointer" }}
              className={`flex gap-1 items-center tab ${
                activeTab === data.title && "active"
              }`}
              key={index}
            >
              <Image
                src={activeTab === data.title ? data.activePic : data.pic}
                alt=""
              />
              <p>{data.title}</p>
            </div>
          )
        )}
      </div>

      <div className="inspection_body ">
        {activeTab === "Insured" && <NewInsured />}
        {activeTab === "Property" && <NewProperty />}
        {activeTab === "Automobile" && <NewAutomobile />}
      </div>

      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        submitTitle={"Select"}
        title="Select Type"
        onSave={closeModal}
      >
        <SelectType />
      </CustomModal>
    </div>
  );
};

export default NewInspectionTab;
