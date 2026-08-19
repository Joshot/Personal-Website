import CustomCursor from "@/components/journey/CustomCursor";
import JourneyProgress from "@/components/journey/JourneyProgress";
import JourneyHero from "@/components/journey/JourneyHero";
import StageSpark from "@/components/journey/StageSpark";
import StageShape from "@/components/journey/StageShape";
import StageBuild from "@/components/journey/StageBuild";
import SkillConstellation from "@/components/journey/SkillConstellation";
import StageLogic from "@/components/journey/StageLogic";
import StageProjects from "@/components/journey/StageProjects";
import StageTogether from "@/components/journey/StageTogether";

export const metadata = {
  title: "Build Journey | Joshua Hotama",
  description: "Explore how I turn concepts into functional digital experiences.",
};

export default function JourneyPage() {
  return (
    <main className="bg-white selection:bg-[#4361ee]/20 selection:text-[#0d1b2a]">
      <CustomCursor />
      <JourneyProgress />
      
      <JourneyHero />
      <StageSpark />
      <StageShape />
      <StageBuild />
      <SkillConstellation />
      <StageLogic />
      <StageProjects />
      <StageTogether />
    </main>
  );
}
