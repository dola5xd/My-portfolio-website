import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Techs from "@/components/sections/Techs";
import Courses from "@/components/sections/Courses";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TextLoop from "@/components/ui/TextLoop";
import {
  fetchFeaturedProjectsFromSanity,
  fetchProjectsFromSanity,
} from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  const [featuredProjects, allProjects] = await Promise.all([
    fetchFeaturedProjectsFromSanity(),
    fetchProjectsFromSanity(),
  ]);

  return (
    <main className="text-white font-display relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <Techs />
      <Courses />
      <Projects
        initialProjects={featuredProjects}
        totalProjectsCount={allProjects.length}
      />
      {/* TextLoop Section Link Ribbon: Pre-Contact Call to Action */}
      <div className="relative z-20 -my-8 sm:-my-16 md:-my-28 overflow-hidden pointer-events-none select-none">
        {/* Mobile: Slightly larger font size with clean letter spacing so letters never collide */}
        <div className="block sm:hidden">
          <TextLoop
            text="Your Website is Ready Now!"
            shape="wave"
            speed={85}
            direction="forward"
            separator="✦"
            curviness={46}
            fontSize={44}
            fontWeight={800}
            letterSpacing={0.5}
            uppercase
            color="#ffffff"
            ribbon
            ribbonColor="#5227FF"
            ribbonWidth={82}
            pauseOnHover={false}
          />
        </div>

        {/* Desktop & Tablet: Balanced proportions */}
        <div className="hidden sm:block">
          <TextLoop
            text="Your Website is Ready Now!"
            shape="wave"
            speed={95}
            direction="forward"
            separator="✦"
            curviness={46}
            fontSize={38}
            fontWeight={800}
            letterSpacing={0}
            uppercase
            color="#ffffff"
            ribbon
            ribbonColor="#5227FF"
            ribbonWidth={74}
            pauseOnHover={false}
          />
        </div>
      </div>
      <Contact />
    </main>
  );
}
