import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";
import { NavBar } from '../components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-red-50">
      {/* <NavBar/> */}
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Index;