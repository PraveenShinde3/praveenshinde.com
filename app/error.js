"use client";
import { MdError } from "react-icons/md";

const error = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center gap-2">
      <p className=" text-center">
        "<b>Oops! Something went wrong.</b> Please try again later. For
        assistance, contact shinde.praveen.dev@gmail.com"{" "}
      </p>
    </div>
  );
};

export default error;
