import React from "react";
import { FaDiscord } from "react-icons/fa";

const AvatarDefault: React.FC<{ color: string }> = (props: {
  color: string;
}) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white rounded-full"
      style={{ backgroundColor: props.color }}
    >
      <FaDiscord size={20} />
    </div>
  );
};

export default AvatarDefault;
