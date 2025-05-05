// components/FeatureSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';
import { Feature } from '../../types/Feature';

import bookImg from '../../assets/book.png';
import graduateImg from '../../assets/graduate.png';
import calendarImg from '../../assets/calendar-ts.png';
import magnifierImg from '../../assets/magnifier.png';

const features: Feature[] = [
  { id: 1, image: bookImg, title: 'Archivierte Dissertationen ansehen' },
  { id: 2, image: graduateImg, title: 'Einarbeitung in die Themen und Autoren der aktuellen Werke' },
  { id: 3, image: calendarImg, title: 'Zeitplan der bevorstehenden Verteidigungsmaßnahmen' },
  { id: 4, image: magnifierImg, title: 'Einfache Suche nach Themen, Fakultäten und Stichworten' },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Eigenschaften der Website</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
