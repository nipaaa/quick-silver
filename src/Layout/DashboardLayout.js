import Header from "@/Components/Shared/Header";
import Sidebar from "@/Components/Sidebar";


const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div style={{ overflowY: "scroll" }} className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
