import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";
import { NavBar } from '../components/NavBar';
import { Market } from './../components/Market';
import Problem from '../components/Problem';
import WhatWeDo from '../components/WhatWeDo';
import ONDCIntegration from '../components/ONDCIntegration';
import ReviewsFAQs from '../components/ReviewsFAQs';
import { Mission } from '../components/Mission';

const Index = () => {
  return (
    <div className="min-h-screen bg-red-50">
      {/* <NavBar/> */}
      <Hero />
      <Problem/>
      <WhatWeDo/>
      <Features />
      <HowItWorks />
      <ONDCIntegration/>
      <Market/>
      <ReviewsFAQs/>
      <Mission/>
      <CallToAction />
    </div>
  );
};

export default Index;