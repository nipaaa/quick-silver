import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div style={{ overflowY: "scroll" }} className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
