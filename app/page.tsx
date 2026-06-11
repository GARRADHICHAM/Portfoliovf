import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BeyondCode from "@/components/BeyondCode";
import ContactSection from "@/components/ContactSection";

function Divider() {
  return (
    <div className="bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <CertificationsSection />
        <Divider />
        <BeyondCode />
        <Divider />
        <ContactSection />
      </main>
    </>
  );
}
