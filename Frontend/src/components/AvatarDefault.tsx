import React from "react";
import { FaDiscord } from "react-icons/fa";

const AvatarDefault: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white rounded-full"
      style={{ backgroundColor: color ?? "#5865f2" }}
    >
      <FaDiscord size={20} />
    </div>
  );
};

export default AvatarDefault;
