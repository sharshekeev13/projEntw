import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import ProjectGrid from './ProjectGrid';
import BenefitSection from './BenefitSection';
import FeatureSection from './FeatureSection';
import CallToActionSection from './CallToActionSection';

const LandingPage: React.FC = () => {
  return (
    <div>
        <Hero />
        <SearchBar />
        <ProjectGrid />
        <BenefitSection />
        <FeatureSection />
        <CallToActionSection />
    </div>
  );
};

export default LandingPage;
