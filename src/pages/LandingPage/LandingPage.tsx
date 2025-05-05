import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import ProjectGrid from './ProjectGrid';

const LandingPage: React.FC = () => {
  return (
    <div>
        <Hero />
        <SearchBar />
        <ProjectGrid />
    </div>
  );
};

export default LandingPage;
