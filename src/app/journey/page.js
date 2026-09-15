import CustomCursor from "@/components/journey/CustomCursor";
import JourneyProgress from "@/components/journey/JourneyProgress";
import JourneyHero from "@/components/journey/JourneyHero";
import DeveloperQuestGame from "@/components/journey/DeveloperQuestGame";
import StageSpark from "@/components/journey/StageSpark";
import StageShape from "@/components/journey/StageShape";
import StageBuild from "@/components/journey/StageBuild";
import SkillConstellation from "@/components/journey/SkillConstellation";
import StageLogic from "@/components/journey/StageLogic";
import StageProjects from "@/components/journey/StageProjects";
import StageTogether from "@/components/journey/StageTogether";

export const metadata = {
  title: "Career Quest & Build Journey | Joshua Hotama",
  description: "Play through Joshua Hotama's interactive developer quest and explore how ideas transform into production software.",
};

export default function JourneyPage() {
  return (
    <main className="bg-white selection:bg-[#4361ee]/20 selection:text-[#0d1b2a]">
      <CustomCursor />
      <JourneyProgress />
      
      <JourneyHero />
      <DeveloperQuestGame />
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
