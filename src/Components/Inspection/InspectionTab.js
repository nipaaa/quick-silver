import insured from "../../assets/insured.png";
import insuredActive from "../../assets/insured-active.png";
import property from "../../assets/property.png";
import propertyActive from "../../assets/property-active.png";
import hazard from "../../assets/hazard.png";
import hazardActive from "../../assets/hazard-active.png";
import outbuilding from "../../assets/outbuilding.png";
import outbuildingActive from "../../assets/outbuilding-active.png";
import attachment from "../../assets/attachments.png";
import attachmentActive from "../../assets/attachments-active.png";
import action from "../../assets/action.png";
import actionActive from "../../assets/action-active.png";
import history from "../../assets/history.png";
import historyActive from "../../assets/history-active.png";

import { useState } from "react";
import Insured from "./Insured";
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
            <img src={activeTab === index ? data.activePic : data.pic} alt="" />
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      <div className="inspection_body">
        {activeTab === 0 && <Insured />}
        {activeTab === 1 && <Property />}
      </div>
    </div>
  );
};

export default InspectionTab;
