import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Projects | Manas Acharya",
  description:
    "Production systems, machine-learning research, and full-stack tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <h1 className="sr-only">Projects by Manas Acharya</h1>
        <ProjectsShowcase />
      </main>
      <Footer />
    </>
  );
}
