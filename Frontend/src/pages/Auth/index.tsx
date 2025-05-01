import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
const Auth: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url("../assets/bg-login-page.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-svh"
    >
      <Link
        to={"/"}
        className="flex items-center text-white gap-3 fixed top-10 z-10 lg:left-12 left-4"
      >
        <FaDiscord className="text-4xl" />
        <span className="text-white font-bold text-xl">PingTalk</span>
      </Link>
      <Outlet />
    </div>
  );
};

export default Auth;
