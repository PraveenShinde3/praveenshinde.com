import React from "react";
import Image from "next/image";
import ModeToggle from "./modeToggle";
import logo from "../../public/noisy-logo.png";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <div className="px-8 pb-8">
      <div className=" -ml-1  flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="24px"
            height="24px"
            className="w-5 h-5 rounded-full drop-shadow-xl m-1"
          />
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
