import React from "react";
import { BsTelephoneXFill } from "react-icons/bs";
import { FaMicrophone, FaUser } from "react-icons/fa";
import "../animation-styles/ripple-dot.css";

type VoiceCallProps = {
  isOpen: boolean;
  onHangup: () => void;
};

const VoiceCallModal: React.FC<VoiceCallProps> = ({ isOpen, onHangup }) => {
  return (
    <div
      className={`w-96 aspect-square bg-charcoal rounded-3xl p-5 fixed  left-1/2 -translate-x-1/2 z-10 flex flex-col justify-between items-center transition-all duration-300 ease-in-out ${
        isOpen
          ? "-translate-y-1/2 top-1/2 opacity-100"
          : "-translate-y-0 top-full opacity-0 "
      }`}
    >
      <div className="relative w-1/2 aspect-square rounded-full flex  mt-8">
        <div className="ripple-dot absolute top-0 left-0 right-0 bottom-0 w-full aspect-square bg-zinc-200 rounded-full flex z-[5]"></div>
        <FaUser className="text-5xl text-zinc-400 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
      </div>
      <div>Calling...</div>
      <div className="flex items-center gap-2">
        <button className="flex text-xl w-14 h-14 bg-[#383a40]  rounded-full">
          <FaMicrophone className="m-auto" />
        </button>
        <button
          onClick={onHangup}
          className="flex text-xl w-14 h-14 bg-red-500 rounded-full"
        >
          <BsTelephoneXFill className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default VoiceCallModal;
