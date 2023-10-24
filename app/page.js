import Home from "./components/Home";
import About from "./components/About";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center  items-center">
      <Home />
      <About />
    </div>
  );
}
