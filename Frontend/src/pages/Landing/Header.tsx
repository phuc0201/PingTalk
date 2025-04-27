import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DrawerMenu from "./DrawerMenu";

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const megaMenu = [
    { label: "Download", link: "#" },
    { label: "Nitro", link: "#" },
    { label: "Discover", link: "#" },
    { label: "Safety", link: "#" },
    { label: "Quests", link: "#" },
    { label: "Support", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Developers", link: "#" },
    { label: "Careers", link: "#" },
  ];
  return (
    <header className="w-full py-10">
      <nav className="p-0 px-10 text-white w-full flex items-center justify-center">
        <Link
          to={"/"}
          className="flex items-center text-white gap-3 fixed top-14 left-10 -translate-y-1/2 z-10"
        >
          <FaDiscord className="text-3xl" />
          <span className="text-white font-bold text-xl">PingTalk</span>
        </Link>
        <ul className="lg:flex hidden items-center ">
          {megaMenu.map((item) => (
            <li>
              <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold lg:text-sm xl:text-base">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="fixed top-14 right-10 -translate-y-1/2 flex items-center gap-4 z-10">
          <Link
            to={"/login"}
            className="sm:block hidden px-4 p-[8px] pt-[6px] bg-white text-black hover:bg-white/80 font-semibold rounded-2xl text-center items-center text-base"
          >
            Log In
          </Link>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden aspect-square h-[38px] flex bg-white/10 rounded-xl"
          >
            <HiOutlineMenuAlt2 className="m-auto text-xl" />
          </button>
        </div>
      </nav>

      <DrawerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
};

export default Header;
