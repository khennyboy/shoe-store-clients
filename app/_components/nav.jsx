"use client";
import Image from "next/image";
import Cart from "./cart";
import Profile from "./profile";
import Login from "./login";
import open from "@/public/icon-menu.svg";
import close from "@/public/icon-close.svg";
import { useRef, useState } from "react";
import useNav from "./navhooks";

const path = ["Collections", "Men", "Women", "About", "Contact"];

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef();
  function toggleIcon() {
    setOpenNav((prev) => !prev);
  }

  useNav({
    openNav,
    setOpenNav,
    navRef,
  });

  const menuIcon = openNav ? close : open;

  return (
    <nav
      ref={navRef}
      className="flex items-center gap-4 border-b-[3px] border-b-black/20 py-2 sm:gap-6 md:py-0 lg:gap-8 xl:gap-10"
    >
      <div
        className={`cursor-pointer md:hidden ${openNav ? "fixed right-[40%] top-6 z-[100]" : "relative right-0 top-0 z-0"}`}
        onClick={() => toggleIcon()}
      >
        <Image
          src={menuIcon}
          alt="toggle-menu-icon"
          className={`${openNav ? "w-6" : "w-fit"}`}
        />
      </div>

      <h1 className="flex-1 text-[1.3rem] font-bold md:flex-initial">
        SoleMate
      </h1>
      <div
        className={`fixed left-0 top-0 z-50 items-center gap-4 overflow-hidden transition-transform duration-200 ease-linear sm:gap-6 md:relative md:top-0 md:flex md:h-fit md:w-fit md:flex-1 md:scale-100 lg:gap-4 xl:gap-10 ${
          openNav
            ? "w-[80%] scale-100 bg-DarkOrange p-10 shadow-md"
            : "h-0 w-0 scale-0"
        }`}
        style={{
          transformOrigin: "top center",
        }}
      >
        {path.map((each, index) => {
          return (
            <button
              className="navBtn py-4 font-medium md:py-6 hover:md:border-b-4 hover:md:border-b-DarkOrange"
              key={index}
            >
              <span>{each}</span>
            </button>
          );
        })}
      </div>
      <Cart />
      <Profile />
      <Login />
    </nav>
  );
}
