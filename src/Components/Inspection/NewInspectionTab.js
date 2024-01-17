import insured from "../../assets/insured.png";
import insuredActive from "../../assets/insured-active.png";
import property from "../../assets/property.png";
import propertyActive from "../../assets/property-active.png";
import inspection from "../../assets/inspection-org.png";
import { useState } from "react";

import Image from "next/image";
import NewInsured from "./NewInsured";
import NewProperty from "./NewProperty";

const NewInspectionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    },
  ];
  return (
    <div>
      <div className="flex gap-[10px] items-center mt-[45px] ml-[30px]">
        <Image src={inspection} alt="icon" width={16} height={16} />
        <p className="font-medium">Unassigned Inspection</p>
      </div>
      <div className="inspection_tab">
        {tabs.map((data, index) => (
          <div
            onClick={() => setActiveTab(index)}
            style={{ cursor: "pointer" }}
            className={`flex gap-1 items-center tab   ${
              activeTab === index && "active"
            }`}
            key={index}
          >
            <Image
              src={activeTab === index ? data.activePic : data.pic}
              alt=""
            />
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      <div className="inspection_body ">
        {activeTab === 0 && <NewInsured />}
        {activeTab === 1 && <NewProperty />}
      </div>
    </div>
  );
};

export default NewInspectionTab;
