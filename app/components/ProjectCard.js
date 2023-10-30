import React from "react";
import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row h-fit p-2 gap-4 border-2 border-muted rounded-xl w-full my-8">
      <div className="rounded-xl overflow-hidden">
        <Image width={"100%"} src={data.imageUrl} />
      </div>
      <div className="py-2 md:w-11/12 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <p className="sm:text-3xl md:text-4xl text-2xl font-semibold">
            <span className="text-muted-foreground">{data.id}.</span>
            {data.projectData.title}
          </p>
          <p className="text-muted-foreground">{data.projectData.tag}</p>
          <p className="text-sm text-muted-foreground">
            {data.projectData.desc}
          </p>
          <p className="text-sm text-muted-foreground">
            {data.projectData.tech}
          </p>
        </div>
        <div>
          <a href={data.projectData.link} target="_blank">
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
