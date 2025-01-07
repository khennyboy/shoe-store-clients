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
import { Suspense } from "react";

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
      className="fixed left-0 top-0 flex w-full items-center gap-4 px-4 py-2 shadow-md sm:gap-6 md:py-0 lg:gap-8 lg:px-8 xl:gap-10 xl:px-12"
    >
      <button
        className={`cursor-pointer md:hidden ${openNav ? "fixed right-[40%] top-6 z-[150]" : "relative right-0 top-0 z-0"}`}
        onClick={() => toggleIcon()}
        aria-expanded={openNav}
      >
        <Image
          src={menuIcon}
          unoptimized
          alt="toggle-menu-icon"
          className={`${openNav ? "w-6" : "w-fit"}`}
        />
      </button>

      <h1 className="flex-1 text-[1.3rem] font-bold md:flex-initial">
        SoleMate
      </h1>
      <Suspense fallback="loading...">
        <div
          className={`fixed left-0 top-0 items-center gap-1 overflow-hidden transition-transform duration-200 ease-linear sm:gap-6 md:relative md:top-0 md:flex md:h-fit md:w-fit md:flex-1 md:scale-100 lg:gap-2 ${
            openNav
              ? "z-[100] w-[80%] scale-100 space-y-2 bg-DarkOrange px-8 py-12 shadow-md"
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
                className={`relative border-b-2 py-2 text-start font-medium text-white md:w-fit md:border-b-0 md:py-5 md:text-black lg:py-6 ${isActive ? "border-b-white/80" : "border-b-white/20"}`}
                key={index}
              >
                <Link
                  className={`relative transition-all duration-300 ease-linear after:w-full hover:opacity-100 hover:after:h-fit md:p-4 md:px-2 md:after:py-4 md:hover:after:absolute md:hover:after:inset-0 md:hover:after:-z-50 md:hover:after:m-auto md:hover:after:rounded md:hover:after:bg-gray-100 md:hover:after:py-4 lg:px-4 ${isActive ? "opacity-100" : "opacity-70"}`}
                  href={each.path}
                  onClick={() => {
                    if (openNav) {
                      setOpenNav(false);
                    }
                  }}
                >
                  {each.name}
                </Link>
                <div
                  className={`left-0 md:absolute md:bottom-0 md:h-[2px] md:w-full ${isActive ? "md:bg-DarkOrange" : ""}`}
                ></div>
              </div>
            );
          })}
        </div>
      </Suspense>
      <Cart />
      <Profile />
      <Login />
    </nav>
  );
}
