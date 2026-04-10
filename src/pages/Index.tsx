import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoadmapSection from "@/components/RoadmapSection";
import CourseGrid from "@/components/CourseGrid";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <RoadmapSection />
    <CourseGrid />
  </div>
);

export default Index;
