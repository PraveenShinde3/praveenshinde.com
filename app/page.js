import Home from "./components/Home";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import LeetcodeProblems from "./components/LeetcodeProblems";
import Certifications from "./components/Certifications";
import LeetcodeGithub from "./components/LeetcodeGithub";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Home />
      <LeetcodeGithub />
      <About />
      <ProjectSection />
      <Certifications />
      <BlogSection />
    </div>
  );
}
