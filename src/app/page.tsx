import CommunityBuilding from "@/components/CommunityBuilding";
import HeroSection from "@/components/HeroSection";
import HflagTokens from "@/components/HflagTokens";
import { Marketplace } from "@/components/Marketplace";
import MissionVision from "@/components/MissionVision";
import Roadmap from "@/components/Roadmap";
import WelcomeComponent from "@/components/WelcomeComponent";

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] w-full text-white">
        <HeroSection/>
        <WelcomeComponent/>
        <Marketplace/>
        <HflagTokens/>
        <CommunityBuilding/>
        {/* one section added here soon */}
        <MissionVision/>
        <Roadmap/>
    </div>
  );
}
