import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
const UserPanel: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="absolute bottom-2  left-2 right-2 h-14 bg-customDark rounded-lg flex items-center justify-between text-white px-2">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center">
            <FaDiscord size={25} />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232428]"></div>
        </div>
        <div>
          <div className="text-xs font-medium">Phúc</div>
          <div className="text-xs text-green-500">Online</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`text-gray-400 hover:text-red-500 transition-colors ${
            isMuted ? "text-red-500" : ""
          }`}
        >
          {isMuted ? (
            <FaMicrophoneSlash size={20} />
          ) : (
            <FaMicrophone size={17} />
          )}
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <FaHeadphones size={18} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <IoIosSettings size={25} />
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
