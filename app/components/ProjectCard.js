import React from "react";
import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";

const ProjectCard = ({ ImageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row h-fit p-2 gap-4 border-2 border-muted rounded-xl w-full my-8">
      <div className="rounded-xl overflow-hidden">
        <Image width={"100%"} src={ImageSrc} />
      </div>
      <div className="py-2 md:max-w-1/3 md:w-2/3 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <p className="sm:text-3xl md:text-4xl text-2xl font-semibold">
            <span className="text-muted-foreground">01.</span>Random Password
            Generate
          </p>
          <p className="text-muted-foreground">Web Application</p>
          <p className="text-sm text-muted-foreground">
            Creates secure, random passwords for users to use for their various
            online accounts and information.Creates secure, random passwords for
            users to use for their various online accounts and information.
          </p>
          <p className="text-sm text-muted-foreground">Html Css JavaScript</p>
        </div>
        <div>
          <a
            href="https://generates-random-password.netlify.app/"
            target="_blank"
          >
            <p className="flex gap-4 items-center">
              Demo <RxExternalLink />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
