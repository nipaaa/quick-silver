import Header from "@/Components/Shared/Header";
import Sidebar from "@/Components/Sidebar";
import PrivateRoutes from "@/privateRoutes/PrivateRoutes";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    // <PrivateRoutes>
    <div className="h-screen flex">
      <div className="flex-shrink-0">
        <Sidebar showSideBar={showSideBar} handleSidebar={handleSidebar} />
      </div>

      <div style={{ overflowY: "auto" }} className="no_scrollbar w-full">
        <Header handleSidebar={handleSidebar} />
        {children}
      </div>
    </div>
    // </PrivateRoutes>
  );
};

export default DashboardLayout;
