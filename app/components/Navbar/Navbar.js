// Navbar.js
"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const navbarItems = [
    {
      key: "1",
      title: "Home",
      icon: <AiOutlineHome />,
      href: "/",
    },
    // {
    //   key: "2",
    //   title: "About",
    //   icon: <AiOutlineInfoCircle />,
    // },
    {
      key: "3",
      title: "Work",
      icon: <MdWorkOutline />,
      href: "/work",
    },
    {
      key: "4",
      title: "Blog",
      icon: <BsCardText />,
      href: "/blog",
    },
  ];

  return (
    <nav className="z-50 fixed bottom-0 left-1/2 px-8 py-8 -translate-x-1/2">
      <div className="p-3 bg-background text-sm rounded-2xl flex gap-4 border-muted border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        {navbarItems.map((item) => {
          return (
            <Link key={item.key} href={item.href}>
              <div
                key={item.key}
                className={
                  "flex gap-2 px-4 py-3 rounded-xl text-foreground justify-center items-center cursor-pointer" +
                  (pathname === item.href
                    ? "bg-foreground font-semibold border-[2px] border-muted"
                    : "bg-background")
                }
              >
                {item.icon} {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
