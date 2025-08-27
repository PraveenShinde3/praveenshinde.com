"use client";
import React from "react";
import Button from "./Button";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaJava } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import { SiNextdotjs, SiSpringboot } from "react-icons/si";

import Link from "next/link";

const RESUME_FILE_NAME = "Praveen-Shinde-CV.pdf";
const RESUME_PATH = "/PraveenShindeResume.pdf";

const SOCIAL_LINKS = [
  {
    href: "mailto:shinde.praveen.dev@gmail.com",
    icon: <MdAlternateEmail />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/shindepraveen/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://github.com/PraveenShinde3",
    icon: <FaGithub />,
    label: "GitHub",
    target: "_blank",
  },
  {
    href: "https://x.com/praveens_code",
    icon: <FaXTwitter />,
    label: "X (Twitter)",
    target: "_blank",
  },
];

const TechHighlight = ({ children }) => (
  <span className="text-foreground font-mono font-semibold">{children}</span>
);

const Home = () => {
  const handleDownload = () => {
    const baseUrl = process.env.NEXT_PUBLIC_HOSTNAME || window.location.origin;
    const resumeUrl = `${baseUrl}${RESUME_PATH}`;

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = RESUME_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="px-8 h-full flex flex-col">
        <header>
          <h1 className="font-bold">Praveen Shinde</h1>
          <p>Full-stack Developer</p>
          <p>
            Mumbai, India{" "}
            <Image
              src="/indiaflag.svg"
              alt="India Flag"
              width={24}
              height={16}
              className="inline h-3 opacity-100"
            />
          </p>
        </header>
        <main className=" sm:w-11/12">
          {/* <h2 className="font-bold">From Visual Concepts to Functional Code</h2> */}
          <section className="py-4 flex flex-col gap-2 text-muted-foreground tracking-wide">
            <p>
              Specializing in frontend development with{" "}
              <TechHighlight>
                <SiNextdotjs className="inline animate-bounce" />{" "}
                Next.js(React.js)
              </TechHighlight>
              , I am passionate about building dynamic, responsive web
              applications. Alongside my frontend expertise, I also have
              experience in backend development with{" "}
              <TechHighlight>
                <SiSpringboot className="inline animate-bounce" /> Spring Boot
              </TechHighlight>{" "}
              and{" "}
              <TechHighlight>
                <FaJava className="inline animate-bounce" /> Java
              </TechHighlight>{" "}
            </p>
          </section>
          <div className="pt-3 flex gap-4 items-center">
            <Button
              onClick={handleDownload}
              text="Resume"
              bold
              highlight
              icon={<LuDownload />}
            />
            <nav className="flex gap-2">
              {SOCIAL_LINKS.map(({ href, icon, label, target }) => (
                <Link
                  key={label}
                  href={href}
                  target={target}
                  aria-label={label}
                  className="bg-accent p-2 rounded-full"
                >
                  {icon}
                </Link>
              ))}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
