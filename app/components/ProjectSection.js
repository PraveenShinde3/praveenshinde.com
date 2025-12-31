import React from "react";
import GeneratePassImg from "../../public/GeneratePassword.png";
// import NotesWebImg from "../../public/NotesWeb.png";
import ProjectCard from "./ProjectCard";
import CertificateHubThumbnail from "../../public/CertificateHubthum.jpg";
import SolveAlgoThumbnail from "../../public/solveAlgoThumb.png";
import TailwindAnimationThumbnail from "../../public/tailwind-animations.png";
import DesignDexThumbnail from "../../public/DesignDexThumbnail.png";
import DsaDocThumbnail from "../../public/Dsa-doc-thumbnail.png";

const ProjectSection = () => {
  const projectData = [
    {
      id: "01",
      imageUrl: DsaDocThumbnail,
      projectData: {
        title: "DSA Documentation",
        desc: "A comprehensive resource for learning and mastering Data Structures and Algorithms (DSA), designed to help programmers of all levels enhance their coding skills and problem-solving abilities.",
        tag: "Web Application",
        tech: "Next Js",
        link: "https://dsa-doc.vercel.app/",
      },
    },
    {
      id: "02",
      imageUrl: TailwindAnimationThumbnail,
      projectData: {
        title: "Tailwind CSS Animations",
        desc: "collection of beautifully crafted, lightweight animations built entirely using Tailwind CSS",
        tag: "Web Application",
        tech: "Next Js",
        link: "https://tailwind-css-animations.vercel.app/",
      },
    },
    // {
    //   id: "03",
    //   imageUrl: DesignDexThumbnail,
    //   projectData: {
    //     title: "DesignDex",
    //     desc: "Unlock a world of design possibilities with our curated collection of resources, tools, and inspiration.",
    //     tag: "Web Application",
    //     tech: "Next Js, Supabase",
    //     link: "https://designdex.vercel.app/",
    //   },
    // },
    // {
    //   id: "04",
    //   imageUrl: SolveAlgoThumbnail,
    //   projectData: {
    //     title: "SolveAlgo",
    //     desc: "Algorithms are the backbone of coding, helping you approach complex challenges with clarity and creativity.",
    //     tag: "Web Application",
    //     tech: "Next Js",
    //     link: "https://solve-algo.vercel.app/",
    //   },
    // },
    // {
    //   id: "05",
    //   imageUrl: CertificateHubThumbnail,
    //   projectData: {
    //     title: "Certificate Hub",
    //     desc: "Creates secure, random passwords for users to use for their various online accounts and information.Creates secure, random passwords for users to use for their various online accounts and information.",
    //     tag: "Web Application",
    //     tech: "Next Js & Supabase",
    //     link: "https://certificatehub.vercel.app/",
    //   },
    // },
    // {
    //   id: "05",
    //   imageUrl: GeneratePassImg,
    //   projectData: {
    //     title: "Password Generator",
    //     desc: "Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform.",
    //     tag: "Web Application",
    //     tech: "HTML, CSS & JavaScript",
    //     link: "https://generates-random-password.netlify.app/",
    //   },
    // },
    // {
    //   id: "06",
    //   imageUrl: NotesWebImg,
    //   projectData: {
    //     title: "Notes Web App",
    //     desc: "Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform.",
    //     tag: "Web Application",
    //     tech: "React js, Tailwind css",
    //     link: "https://notes-webapp.pages.dev/",
    //   },
    // },
  ];
  return (
    <div className="px-8">
      <div>
        <p className="font-bold">Projects</p>
      </div>
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6">
        {projectData.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
