import React from "react";
import ProjectCard from "../components/ProjectCard";
import GeneratePassImg from "../../public/GeneratePassword.png";
import NotesWebImg from "../../public/NotesWeb.png";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen container py-6 md:py-20">
        <div className="2xl:px-48 xl:px-32 lg:px-12 p-10 md:p-1  h-full flex flex-col">
          <p className="text-xl font-semibold">Work</p>
          <div className="py-1 md:py-4">
            <ProjectCard ImageSrc={GeneratePassImg} />
            <ProjectCard ImageSrc={NotesWebImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
