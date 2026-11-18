import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BeyondCode from "@/components/BeyondCode";
import ContactSection from "@/components/ContactSection";
import SceneBackground from "@/components/three/SceneBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import NetworkHUD from "@/components/three/NetworkHUD";

export default function Home() {
  return (
    <>
      <SceneBackground />
      <CursorGlow />
      <NetworkHUD />
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <BeyondCode />
        <ContactSection />
      </main>
    </>
  );
}
