import Header from "@/Components/Shared/Header";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="h-screen flex">
      <div className="flex-shrink-0">
        <Sidebar showSideBar={showSideBar} handleSidebar={handleSidebar} />
      </div>

      <div style={{ overflowY: "auto" }} className="w-full">
        <Header handleSidebar={handleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
