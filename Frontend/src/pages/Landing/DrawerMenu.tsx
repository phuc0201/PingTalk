import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

interface DrawerMenuProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  toggleMenu,
  setToggleMenu,
}) => {
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

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleMenu]);

  return (
    <>
      <div>
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black/70 transition-opacity duration-300 ${
            toggleMenu ? "z-10 opacity-100" : "z-[-1] opacity-0 hidden"
          }`}
        ></div>
        <div
          className={`flex flex-col justify-between fixed top-0 bottom-0 right-0 sm:w-[500px] w-full bg-brand rounded-l-[40px] z-20 transition-transform duration-300 ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <section className="menu-header flex justify-between items-center p-6">
            <button className="text-white text-4xl">
              <FaDiscord />
            </button>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-3xl p-1 bg-white/10 rounded-xl text-white
              "
            >
              <IoCloseOutline />
            </button>
          </section>
          <section className="menu-body flex-1 overflow-auto">
            <div className="grid">
              {megaMenu.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-lg px-6 font-bold text-white"
                >
                  <div className="py-5 border-0 border-b-[1px] border-white/10">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="menu-footer grid gap-2 p-6">
            <Link
              to={"/login"}
              className="text-sm p-3 px-3 rounded-lg border border-white/50 w-full text-center text-white font-medium"
            >
              Login
            </Link>
            <button className="text-sm p-3 px-3 rounded-lg bg-white w-full text-center font-medium">
              Download for Windows
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;
