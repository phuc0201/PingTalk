import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full py-10">
      <nav className="p-0 px-10 text-white w-full flex items-center justify-center">
        <Link
          to={"/"}
          className="flex items-center text-white gap-3 fixed top-10 left-10"
        >
          <FaDiscord className="text-3xl" />
          <span className="text-white font-bold text-xl">PingTalk</span>
        </Link>
        <ul className="flex items-center">
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Download
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Nitro
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Discover
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Safety
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Quests
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Support
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Blog
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Developers
            </button>
          </li>
          <li>
            <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold">
              Careers
            </button>
          </li>
        </ul>
        <Link
          to={"/login"}
          className="px-4 p-[8px] pt-[6px] bg-white text-black hover:bg-white/80 font-semibold rounded-2xl text-center items-center text-base fixed top-10 right-10"
        >
          Log In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
