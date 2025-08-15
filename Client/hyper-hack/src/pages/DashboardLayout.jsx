import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const DashboardLayout = () => {
  return (
    <div className="w-full flex items-start">
      <div className="bg-[#090f25] hidden md:block md:w-[20%] lg:w-[15%] h-screen border-r border-r-[#1e263a]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] lg:w-[85%]">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
