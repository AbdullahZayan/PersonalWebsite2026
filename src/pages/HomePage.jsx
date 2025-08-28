import Navbar from "../components/Navbar"
import HomeSection from "../components/HomeSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import CertificationSection from "../components/CertificationSection"
import ContactSection from "../components/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <ContactSection />
      </main>
    </div>
  )
}