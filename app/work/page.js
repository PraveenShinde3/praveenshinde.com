import React from "react";
import ProjectCard from "../components/ProjectCard";
import GeneratePassImg from "../../public/GeneratePassword.png";
import NotesWebImg from "../../public/NotesWeb.png";

const Work = () => {
  const workData = [
    {
      id: "01",
      imageUrl: GeneratePassImg,
      projectData: {
        title: "Random Password Generate",
        desc: "Creates secure, random passwords for users to use for their various online accounts and information.Creates secure, random passwords for users to use for their various online accounts and information.",
        tag: "Web Application",
        tech: "HTML CSS & JavaScript",
        link: "https://generates-random-password.netlify.app/",
      },
    },
    {
      id: "02",
      imageUrl: NotesWebImg,
      projectData: {
        title: "Notes Web App",
        desc: "Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform.",
        tag: "Web Application",
        tech: "React js Tailwind css JavaScript",
        link: "https://notes-webapp.pages.dev/",
      },
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen container py-6 md:py-20">
        <div className="2xl:px-48 xl:px-32 lg:px-12 py-10 pb-20 px-6 md:p-1  h-full flex flex-col">
          <p className="text-xl font-semibold">Work</p>
          <div className="py-1 md:py-4">
            {workData.map((item) => {
              return <ProjectCard key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
