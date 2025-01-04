"use client";
import close from "@/public/icon-close.svg";
import open from "@/public/icon-menu.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Cart from "./cart";
import Login from "./login";
import useNav from "./navhooks";
import Profile from "./profile";

const navLinks = [
  { name: "Collections", path: "/" },
  { name: "Men", path: "/?filter=men" },
  { name: "Women", path: "/?filter=women" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const navRef = useRef();
  const searchParams = useSearchParams();

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
      <button
        className={`cursor-pointer md:hidden ${openNav ? "fixed right-[40%] top-6 z-[100]" : "relative right-0 top-0 z-0"}`}
        onClick={() => toggleIcon()}
        aria-expanded={openNav}
      >
        <Image
          src={menuIcon}
          alt="toggle-menu-icon"
          className={`${openNav ? "w-6" : "w-fit"}`}
        />
      </button>

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
        {navLinks.map((each, index) => {
          const isFilter = searchParams.get("filter");

          const isActive =
            (each.path === pathname && each.name !== "Collections") ||
            (each.name === "Collections" &&
              isFilter === null &&
              each.path === pathname) ||
            (each.name === "Men" && isFilter === "men") ||
            (each.name === "Women" && isFilter === "women");

          return (
            <div
              className={`relative block w-full cursor-default border-b-2 py-4 text-start font-medium text-white transition-all duration-300 ease-linear hover:opacity-100 md:w-fit md:border-b-0 md:py-6 md:text-black ${
                isActive
                  ? "border-b-white opacity-100 md:border-b-4 md:border-b-DarkOrange"
                  : "border-b-black/20 opacity-70 hover:md:border-b-4 hover:md:border-b-DarkOrange"
              }`}
              key={index}
            >
              <Link
                href={each.path}
                onClick={() => {
                  if (openNav) {
                    setOpenNav(false);
                  }
                }}
              >
                {each.name}
              </Link>
            </div>
          );
        })}
      </div>
      <Cart />
      <Profile />
      <Login />
    </nav>
  );
}
