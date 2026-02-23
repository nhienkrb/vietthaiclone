import About from "@/app/about/_sections/About";
import AboutVisionMission from "@/app/about/_sections/AboutVisionMission";
import TeamSection from "@/app/about/_sections/TeamSection";
import UniverseSection from "@/app/about/_sections/UniverseSection";
import OrganicChoose from "@/app/home/_sections/OrganicChoose";

export default function page() {
  return (
    <>
      <About />
      <AboutVisionMission />
      <UniverseSection/>
      <OrganicChoose/>
      <TeamSection/>
    </>
  );
}
