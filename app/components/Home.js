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
            <p className="opacity-70 ">Full-stack developer & UI Designer</p>
            <p className="opacity-70 ">Mumbai, India</p>
          </div>
        </div>
        <div className="pt-12 w-5/6">
          <p className="font-bold">From Visual Concepts to Functional Code</p>
          <div className="py-4 flex flex-col gap-2 text-zinc-300 tracking-wide">
            <p>
              Specializing in frontend development with{" "}
              <span className=" text-white font-mono font-semibold">
                React Js
              </span>{" "}
              and{" "}
              <span className="text-white font-mono font-semibold">
                Next.js
              </span>
              . I have a strong passion for creating dynamic and responsive web
              applications. In addition to my frontend skills, I have experience
              in backend development using{" "}
              <span className="text-white font-mono font-semibold">
                Node.js, JavaScript, and Java.
              </span>
            </p>
            <p>
              Alongside my development skills, I also have experience in UI
              design using Figma, which allows me to create visually appealing
              and user-friendly interfaces.
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
