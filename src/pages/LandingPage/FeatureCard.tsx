// components/FeatureCard.tsx
import React from 'react';
import { Feature } from '../../types/Feature';
import triangle from '../../assets/triangle-pattern.png'; 

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="relative rounded-lg text-center text-white p-4 flex flex-col h-96" style={{backgroundColor: 'rgb(37,58,103)'}}>
      <img src={feature.image} alt={feature.title} className="w-48 h-48 mx-auto mb-6" />
      <p className="text-sm">{feature.title}</p>
      <img
        src={triangle}
        alt=""
        className="absolute bottom-0 left-0 w-full rounded-b-lg"
      />
    </div>
  );
};

export default FeatureCard;
