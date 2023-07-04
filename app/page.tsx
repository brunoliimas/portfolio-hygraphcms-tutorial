import { HeroSection } from "./components/pages/home/hero-section"
import { HighlightedProject } from "./components/pages/home/highlighted-project"
import { KnowTechs } from "./components/pages/home/know-techs"
import { WorkExperience } from "./components/pages/home/work-experience"


export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProject />
      <WorkExperience />
    </>
  )
}
