import CommunityBuilding from "@/components/CommunityBuilding";
import HeroSection from "@/components/HeroSection";
import { Marketplace } from "@/components/Marketplace";
import WelcomeComponent from "@/components/WelcomeComponent";

export default function Home() {
  return (
    <div className="bg-black w-full text-white">
        <HeroSection/>
        <WelcomeComponent/>
        <Marketplace/>
        {/* one section added here soon */}
        <CommunityBuilding/>
    </div>
  );
}
