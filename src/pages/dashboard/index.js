import Entries from "@/Components/OfficeLocation/Entries";
import Map from "@/Components/OfficeLocation/Map";
import StatusChart from "@/Components/OfficeLocation/StatusChart";
import DashboardLayout from "@/Layout/DashboardLayout";
import React, { useState } from "react";

const Dashboard = () => {
  const [selectedDashboard, setSelectedDashboard] =
    useState("Office Dashboard");

  const handleDashboardChange = (event) => {
    setSelectedDashboard(event.target.value);
  };
  return (
    <DashboardLayout>
      <div className="office_page">
        <div className=" mt-4 ms-5 mb-4">
          <select onChange={handleDashboardChange}>
            <option disabled selected>
              Select Dashboard
            </option>
            <option>Office Dashboard</option>
            <option>Location Dashboard</option>
          </select>
        </div>
        {selectedDashboard === "Office Dashboard" && <StatusChart />}
        {selectedDashboard === "Location Dashboard" && <Map />}
        <Entries />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
