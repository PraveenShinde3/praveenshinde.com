"use client";

import React from "react";
import { BsFolderFill } from "react-icons/bs";
import ModeToggle from "./modeToggle";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <div className="backdrop-blur-md p-8 z-40 inset-0 flex justify-center items-center fixed h-fit w-full container mx-auto">
      <p className="conatiner mx-auto  text-center fixed flex gap-2 justify-center items-center font-medium w-fit  py-2 rounded-2xl">
        <BsFolderFill />
        Portfolio /
        <span className="font-semibold">
          {pathname === "/"
            ? "Home"
            : pathname === "/work"
            ? "Work"
            : pathname.includes("/blog")
            ? "Blog"
            : "404"}
        </span>
      </p>
      <div className="absolute right-0 px-4 hidden md:block">
        <ModeToggle />
      </div>
    </div>
  );
};

export default SiteHeader;
