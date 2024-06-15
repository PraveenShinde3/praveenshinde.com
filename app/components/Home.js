"use client";
import React from "react";
import Button from "./Button";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import "dotenv/config";
import Image from "next/image";
import logo from "../../public/noisy-logo.svg";
// import ModeToggle from "./modeToggle";
// import resume from "../utils/data/Resume-PraveenShinde.pdf";
// import cv from "../../public/Resume-PraveenShinde.pdf";

const Home = () => {
  const handleDownload = () => {
    const ResumePdfUrl =
      process.env.NEXT_PUBLIC_HOSTNAME + "/Resume-PraveenShinde.pdf"; // Update with the correct path to your PDF file

    const link = document.createElement("a");
    link.href = ResumePdfUrl;
    link.download = "Praveen-Shinde-CV.pdf";
    link.click();
  };

  return (
    <div>
      <div className="px-8 pb-12 h-full flex flex-col">
        <div>
          <div>
            <p className="font-bold">Praveen Shinde</p>
            <p className="opacity-70 ">Software Developer & UI Designer</p>
            <p className="opacity-70 ">Mumbai, India</p>
          </div>
        </div>
        <div className="pt-12 w-5/6">
          <p className="font-bold">From Visual Concepts to Functional Code</p>
          <div className="py-4 flex flex-col gap-2 tracking-wide">
            <p>
              Hello, I&apos;m Praveen, an independent designer and developer
              specializing in a diverse range of projects, including promotional
              sites, landing pages, e commerce stores, and member portals.{" "}
            </p>
            <p>
              Additionally, I collaborate with clients on comprehensive branding
              initiatives, covering everything from logo and identity design to
              the development of full brand guidelines and strategies.
            </p>
          </div>
          <div className="pt-3 flex gap-4">
            <Button
              onClick={handleDownload}
              text={"Resume"}
              bold={true}
              highlight={true}
              icon={<LuDownload />}
            />
            <div className="flex gap-2">
              <Button bold={false} highlight={false} icon={<FaGithub />} />
              <Button bold={false} highlight={false} icon={<FaLinkedinIn />} />
              <Button
                bold={false}
                highlight={false}
                icon={<MdAlternateEmail />}
              />
            </div>
          </div>
        </div>

        {/* <div className="relative flex-1 mx-auto px-4 md:px-12 lg:px-20 xl:px-48 lg:py-8 md:py-6 py-2 flex flex-col md:gap-4 gap-8 justify-center items-center sm:items-start">
          <Button
            onClick={handleDownload}
            text={"CV Download"}
            icon={<LuDownload />}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
