import HeroSection from "@/components/HeroSection";
import WelcomeComponent from "@/components/WelcomeComponent";

export default function Home() {
  return (
    <div className="bg-black w-full text-white">
        <HeroSection/>
        <WelcomeComponent/>
    </div>
  );
}
