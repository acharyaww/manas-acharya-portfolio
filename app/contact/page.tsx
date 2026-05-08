import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact | Manas Acharya",
  description:
    "Get in touch — open to data science internship opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <h1 className="sr-only">Contact Manas Acharya</h1>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
