import Home from "./components/Home";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <ProjectSection />
      <BlogSection />
    </div>
  );
}
