import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <main>
        <h1 className="sr-only">About Manas Acharya</h1>
        <About />
      </main>
      <Footer />
    </>
  );
}
