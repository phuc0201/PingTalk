// components/SidebarButton.tsx
import React from "react";

interface SidebarButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  isActive?: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  tooltip,
  isActive = false,
}) => {
  return (
    <button className="relative w-full flex justify-center group">
      <div
        className={`w-10 h-10 ${
          isActive ? "bg-brand" : "bg-gray-800"
        } group-hover:bg-brand transition-all rounded-xl text-white flex items-center justify-center text-xl`}
      >
        {icon}
      </div>
      <div
        className={`pill absolute top-0 bottom-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
          isActive ? "bg-white" : "bg-transparent"
        }`}
      ></div>
      <div className="absolute left-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="relative">
          <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-gray-800"></div>
          <div className="bg-gray-800 text-white py-2 px-4 rounded whitespace-nowrap font-medium text-xs">
            {tooltip}
          </div>
        </div>
      </div>
    </button>
  );
};

export default SidebarButton;
