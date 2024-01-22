import actionActive from "../../assets/action-active.png";
import action from "../../assets/action.png";
import attachmentActive from "../../assets/attachments-active.png";
import attachment from "../../assets/attachments.png";
import hazardActive from "../../assets/hazard-active.png";
import hazard from "../../assets/hazard.png";
import historyActive from "../../assets/history-active.png";
import history from "../../assets/history.png";
import insuredActive from "../../assets/insured-active.png";
import insured from "../../assets/insured.png";
import outbuildingActive from "../../assets/outbuilding-active.png";
import outbuilding from "../../assets/outbuilding.png";
import propertyActive from "../../assets/property-active.png";
import property from "../../assets/property.png";

import Image from "next/image";
import { useState } from "react";
import Actions from "./Actions";
import Attachments from "./Attachments";
import Hazards from "./Hazards";
import HistoryLog from "./HistoryLog";
import Insured from "./Insured";
import OutBuildings from "./OutBuildings";
import Property from "./Property";

const InspectionTab = () => {
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
    {
      pic: hazard,
      activePic: hazardActive,
      title: "Hazards",
    },
    {
      pic: outbuilding,
      activePic: outbuildingActive,
      title: "Outbuildings",
    },
    {
      pic: attachment,
      activePic: attachmentActive,
      title: "Attachments",
    },
    {
      pic: action,
      activePic: actionActive,
      title: "Actions",
    },
    {
      pic: history,
      activePic: historyActive,
      title: "History Logs",
    },
  ];
  return (
    <div>
      <div className="inspection_tab  overflow-x-auto no_scrollbar flex  items-center gap-8 lg:gap-[70px] border-b border-b-[#fafdff] pt-[64px] pr-[30px] pl-[30px]">
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
              className="flex-shrink-0"
              src={activeTab === index ? data.activePic : data.pic}
              alt=""
            />
            <p className="whitespace-nowrap">{data.title}</p>
          </div>
        ))}
      </div>

      <div className="inspection_body">
        {activeTab === 0 && <Insured />}
        {activeTab === 1 && <Property />}
        {activeTab === 2 && <Hazards />}
        {activeTab === 3 && <OutBuildings />}
        {activeTab === 4 && <Attachments />}
        {activeTab === 5 && <Actions />}
        {activeTab === 6 && <HistoryLog />}
      </div>
    </div>
  );
};

export default InspectionTab;
