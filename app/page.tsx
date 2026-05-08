import { Hero } from "@/components/sections/Hero";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProjectsShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
