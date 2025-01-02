"use client";

import Image from "next/image";
import avatar from "@/public/image-avatar.png";
export default function Profile() {
  return (
    <div className="flex-[0_0_3rem] cursor-pointer">
      <Image src={avatar} alt="user" className="w-full rounded-[50%]" />
    </div>
  );
}
