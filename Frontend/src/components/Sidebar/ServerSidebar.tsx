import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import SidebarButton from "./SidebarButton";
const ServerSidebar: React.FC = () => {
  return (
    <div className="w-16 flex flex-col items-center gap-2">
      <SidebarButton
        icon={<FaDiscord className="text-2xl" />}
        tooltip="Direct Messages"
        isActive
      />
      <SidebarButton icon={<FaCirclePlus />} tooltip="Add a Server" />
      <SidebarButton icon={<MdExplore />} tooltip="Discover" />
      <SidebarButton icon={<HiDownload />} tooltip="Download Apps" />
    </div>
  );
};

export default ServerSidebar;
