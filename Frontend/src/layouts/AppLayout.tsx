import React from "react";
import { FaDiscord } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <div className="header bg-[#121214]">
        <div className="title text-gray-300 flex items-center justify-center gap-3 text-sm font-medium py-2">
          <FaDiscord /> PingTalk
        </div>
      </div>
      <div className="flex-1 grid grid-cols-[auto_1fr] overflow-y-hidden">
        <div className="sidebar w-96 bg-[#121214]">
          <Sidebar />
        </div>
        <div className="main-content bg-customDark w-full h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
