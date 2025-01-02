import Image from "next/image";
import Cart from "./cart";
import Profile from "./profile";
import Login from "./login";
import open from "@/public/icon-menu.svg";
import close from "@/public/icon-close.svg";

const path = ["Collections", "Men", "Women", "About", "Contact"];
export default function Nav() {
  return (
    <nav className="flex items-center gap-4 border-b-[3px] border-b-black/20 py-2">
      <div className="cursor-pointer">
        <Image src={open} alt="toggle-menu-icon" className="" />
      </div>

      <h1 className="flex-1 text-[1.3rem] font-bold">SoleMate</h1>
      <div className="fixed left-0 right-0 top-8 z-50 mx-auto h-0 w-0 space-y-4 overflow-hidden rounded-md bg-DarkOrange px-10 pb-12 pt-8 shadow-md">
        <button className="navBtn">
          <span className="cursor-pointer">Collections</span>
        </button>
        <button className="navBtn">
          <span className="cursor-pointer">Men</span>
        </button>

        <button className="navBtn">
          <span className="cursor-pointer">Women</span>
        </button>

        <button className="navBtn">
          <span className="cursor-pointer">About</span>
        </button>

        <button className="navBtn">
          <span className="">Contact</span>
        </button>
      </div>
      <Cart />
      <Profile />
      <Login />
    </nav>
  );
}
