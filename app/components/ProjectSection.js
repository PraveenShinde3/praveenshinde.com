import React from "react";
import GeneratePassImg from "../../public/GeneratePassword.png";
import NotesWebImg from "../../public/NotesWeb.png";
import ProjectCard from "./ProjectCard";
import CertificateHubThumbnail from "../../public/CertificateHubthum.jpg";

const ProjectSection = () => {
  const projectData = [
    {
      id: "01",
      imageUrl: CertificateHubThumbnail,
      projectData: {
        title: "Certificate Hub",
        desc: "Creates secure, random passwords for users to use for their various online accounts and information.Creates secure, random passwords for users to use for their various online accounts and information.",
        tag: "Web Application",
        tech: "Next Js & Supabase",
        link: "https://generates-random-password.netlify.app/",
      },
    },
    {
      id: "02",
      imageUrl: GeneratePassImg,
      projectData: {
        title: "Password Generator",
        desc: "Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform.",
        tag: "Web Application",
        tech: "HTML, CSS & JavaScript",
        link: "https://notes-webapp.pages.dev/",
      },
    },
    {
      id: "03",
      imageUrl: NotesWebImg,
      projectData: {
        title: "Notes Web App",
        desc: "Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform.",
        tag: "Web Application",
        tech: "React js, Tailwind css",
        link: "https://notes-webapp.pages.dev/",
      },
    },
  ];
  return (
    <div className="px-8 pb-8">
      <div>
        <p className="font-bold">Projects</p>
      </div>
      <div className="py-6 grid grid-cols-2 gap-x-14 gap-y-6">
        {projectData.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
