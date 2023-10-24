import React from "react";
import Button from "./Button";
import { LuDownload } from "react-icons/lu";

const Home = () => {
  return (
    <div className="h-screen min-h-screen container py-4 ">
      <div className="px-4 md:px-12 lg:px-24  h-full flex flex-col">
        <div className="relative flex-1 mx-auto px-4 md:px-12 lg:px-24 lg:py-8 md:py-6 py-2 flex flex-col md:gap-4 gap-8 justify-center items-center sm:items-start">
          <p className="text-lg px-1 text-center sm:text-left">
            Hi, My name is{" "}
            <span className="font-bold capitalize">Praveen Shinde</span> from
            Mumbai, India <>&#127470;&#127475;</>
          </p>
          <p className="lg:text-6xl md:text-5xl text-4xl text-center sm:text-left ">
            Software Developer{" "}
            <span className=" text-muted-foreground">
              building future with code.
            </span>
          </p>
          <Button text={"CV Download"} icon={<LuDownload />} />
        </div>
      </div>
    </div>
  );
};

export default Home;
