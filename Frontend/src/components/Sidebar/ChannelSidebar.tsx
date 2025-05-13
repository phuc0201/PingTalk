import React, { useState } from "react";
import { FaDiscord, FaUser } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import CreateDMModal from "../CreateDMModal";
import { NavLink } from "react-router-dom";
const ChannelSidebar: React.FC = () => {
  const [isOpenCreateDMModal, setOpenCreateDMModal] = useState<boolean>(false);
  return (
    <div className="rounded-tl-xl border-2 border-transparent border-t-customDark border-l-customDark w-full h-full p-2">
      <div>
        <NavLink
          to="/channels/@me"
          end
          className={({ isActive }) =>
            `p-2 px-3 rounded-lg flex items-center hover:bg-customDark gap-2 text-gray-50 ${
              isActive ? "bg-customDark" : ""
            }`
          }
        >
          <FaUser /> Friends
        </NavLink>

        <div className="text-gray-400 p-2 px-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-customDark">
          <svg
            className="linkButtonIcon__972a0"
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              className=""
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              clipRule="evenodd"
              className=""
            ></path>
            <path
              fill="currentColor"
              d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z"
              className=""
            ></path>
          </svg>
          Nitro
        </div>

        <div className="text-gray-400 p-2 px-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-customDark">
          <BsShop />
          Shop
        </div>
      </div>

      <div className="h-[2px] bg-customDark w-full"></div>

      <div className="pt-2">
        <div className="flex items-center justify-between text-gray-500 mb-3 px-2">
          <span className="text-sm font-medium text-gray-400">
            Direct Messages
          </span>
          <div className="relative">
            <button
              onClick={() => setOpenCreateDMModal(!isOpenCreateDMModal)}
              className="relative group"
            >
              <FaPlus />
              <div className="absolute bottom-full -translate-y-2 -translate-x-1/2 left-1/2  opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-[6px] border-l-[6px] border-r-[6px] border-transparent border-t-gray-800"></div>
                <div className="bg-gray-800 text-white py-2 px-4 rounded whitespace-nowrap font-medium text-xs">
                  Create Group
                </div>
              </div>
            </button>

            {isOpenCreateDMModal && (
              <div>
                <div
                  onClick={() => setOpenCreateDMModal(!isOpenCreateDMModal)}
                  className="fixed top-0 left-0 right-0 bottom-0"
                ></div>
                <div className="z-10 absolute left-0 top-5">
                  <CreateDMModal />
                </div>
              </div>
            )}
          </div>
        </div>

        <NavLink
          to={"/channels/@me/2345567686"}
          end
          className={({ isActive }) =>
            `${
              isActive ? "bg-customDark" : ""
            } flex items-center w-full hover:bg-customDark px-2 py-2 rounded-lg cursor-pointer`
          }
        >
          <div className="relative w-fit">
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232428]"></div>
            {/* <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                alt=""
                className="object-cover"
              />
            </div> */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white">
                <FaDiscord size={20} />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232428]"></div>
            </div>
          </div>
          <div className="text-gray-400 ml-3">THPhuc</div>
        </NavLink>
      </div>
    </div>
  );
};

export default ChannelSidebar;
