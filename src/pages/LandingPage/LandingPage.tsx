import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import ProjectGrid from './ProjectGrid';
import BenefitSection from './BenefitSection';

const LandingPage: React.FC = () => {
  return (
    <div>
        <Hero />
        <SearchBar />
        <ProjectGrid />
        <BenefitSection />
    </div>
  );
};

export default LandingPage;
