import React from "react";
import ServerSidebar from "./ServerSidebar";
import ChannelSidebar from "./ChannelSidebar";
import UserPanel from "./UserPanel";

const Sidebar: React.FC = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-full relative">
      <ServerSidebar />
      <ChannelSidebar />
      <UserPanel />
    </div>
  );
};

export default Sidebar;
