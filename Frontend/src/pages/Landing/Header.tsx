import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DrawerMenu from "../../components/DrawerMenu";

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 1);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 1024) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      if (windowWidth < 1024) {
        window.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

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
    <header
      className={`w-full lg:py-10 md:py-7 py-3 lg:relative sticky top-0 z-20 ${
        isScrolled ? "bg-brand" : ""
      }`}
    >
      <nav className="p-0 md:px-10 px-6 text-white w-full flex items-center lg:justify-center justify-between">
        <Link
          to={"/"}
          className="flex items-center text-white gap-3 lg:fixed lg:top-14 lg:left-10 lg:-translate-y-1/2 z-10"
        >
          <FaDiscord className="text-3xl" />
          <span className="text-white font-bold text-xl">PingTalk</span>
        </Link>
        <ul className="lg:flex hidden items-center ">
          {megaMenu.map((item, index) => (
            <li key={index}>
              <button className="text-white px-4 p-2 hover:bg-brand rounded-xl font-semibold lg:text-sm xl:text-base">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="lg:fixed lg:top-14 lg:right-10 lg:-translate-y-1/2 flex items-center gap-4 z-10">
          {logged && (
            <Link
              to={"/channels/@me"}
              className="sm:block hidden px-4 p-[8px] pt-[6px] bg-white text-black hover:bg-white/80 font-semibold rounded-2xl text-center items-center text-base"
            >
              Open Pinktalk
            </Link>
          )}
          {!logged && (
            <div>
              <Link
                to={"/auth/login"}
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
          )}
        </div>
      </nav>

      <DrawerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
};

export default Header;
