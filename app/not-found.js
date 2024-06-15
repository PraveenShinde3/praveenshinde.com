import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="px-8 text-foreground h-96 flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <p>
          <span className="font-semibold">404</span> | Not Found
        </p>
        <div className="py-4">
          <p className=" py-1  w-fit bg-accent px-4 rounded-full">
            <Link
              href="/"
              className="flex text-[0.85rem] items-center text-muted-foreground hover:text-foreground transition-all ease-in-out duration-200 gap-2 no-underline w-fit "
            >
              <BsArrowBarLeft /> Back to home{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
