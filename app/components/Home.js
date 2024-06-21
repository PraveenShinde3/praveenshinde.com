"use client";
import React from "react";
import Button from "./Button";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import "dotenv/config";

const Home = () => {
  const handleDownload = () => {
    const ResumePdfUrl = process.env.NEXT_PUBLIC_HOSTNAME + "/Latest-CV.pdf"; // Update with the correct path to your PDF file

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
              <Link
                href="mailto:shinde.praveen.dev@gmail.com"
                className="bg-accent p-2 rounded-full "
              >
                <MdAlternateEmail />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shindepraveen/"
                target="_blank"
                className="bg-accent p-2 rounded-full"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/PraveenShinde3"
                target="_blank"
                className="bg-accent p-2 rounded-full"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
