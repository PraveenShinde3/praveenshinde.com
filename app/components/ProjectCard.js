import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { projectData, imageUrl } = data;
  const { link, title, tech } = projectData;

  return (
    <div className="hover:scale-[1.03] cursor-pointer transition-all ease-in-out duration-200">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="rounded-2xl w-full h-auto object-cover"
            priority
          />
          <div className="py-2 tracking-wide text-[0.85rem] flex justify-between items-center">
            <div>
              <p className="font-medium">{title}</p>
              <p className="opacity-80">{tech}</p>
            </div>
            <GoArrowUpRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
