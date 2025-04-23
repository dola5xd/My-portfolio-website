import { lazy, Suspense } from "react";
import Spinner from "./components/ui/Spinner";
import Aurora from "./components/ui/Aurora";
import Header from "./components/layout/Header";
import Summary from "./components/sections/Summary";

const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const Techs = lazy(() => import("./components/sections/Techs"));
const Courses = lazy(() => import("./components/sections/Courses"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  return (
    <main className="text-white font-display">
      <Suspense fallback={<Spinner />}>
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Aurora
            colorStops={["#232323", "#4f39f6", "#232323"]}
            blend={1}
            amplitude={1.0}
            speed={1}
          />
        </div>

        <Header />
        <Hero />
        <About />
        <Summary />
        <Techs />
        <Courses />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
}

export default App;
