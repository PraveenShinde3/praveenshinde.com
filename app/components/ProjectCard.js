import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ data }) => {
  return (
    <div className="hover:scale-[1.03] cursor-pointer transition-all ease-in-out duration-200">
      <div className=" overflow-hidden">
        <Image
          width={"100%"}
          alt="img"
          src={data.imageUrl}
          className="rounded-2xl"
        />
        <div className="py-2 tracking-wide text-[0.85rem] flex justify-between items-center">
          <div>
            <p className="font-medium">{data.projectData.title}</p>
            <p className=" opacity-80">{data.projectData.tech}</p>
          </div>
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
