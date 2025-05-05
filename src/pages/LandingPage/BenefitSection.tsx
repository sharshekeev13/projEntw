import React from 'react';
import BenefitCard from './BenefitCard';
import { Benefit } from '../../types/Benefit';

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎓',
    title: 'Studenten',
    description: 'Diese Website hilft Studierenden, sich inspirieren zu lassen, die Anforderungen für Abschlussarbeiten zu verstehen und sich auf ihre Verteidigung vorzubereiten. Hier können Sie Beispiele für Verteidigungsarbeiten sehen und deren Themen, Design und Struktur studieren. Die Studierenden können sich auch im Voraus über Datum und Uhrzeit der bevorstehenden Verteidigungen informieren.'
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Studienbewerber und internationale Studierende',
    description: 'Studieninteressierte können sich bereits im Vorfeld mit den Arbeitsbereichen und Themen der WHZ vertraut machen. So erhalten sie eine Vorstellung davon, welche Kenntnisse und Fähigkeiten sie an der Hochschule erwerben können und welchen praktischen Nutzen ihr Studium hat.'
  },
  {
    id: 3,
    icon: '👩‍🏫',
    title: 'Lehrkräfte',
    description: 'Für akademische Betreuer und Lehrer dient das Portal als Plattform, um die Leistungen ihrer Studenten zu präsentieren. Es hilft dabei, Diplomarbeitsthemen zu verfolgen, Ansätze zwischen Abteilungen zu vergleichen und erfolgreiche Projekte innerhalb der akademischen Gemeinschaft zu teilen.'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Arbeitgeber und Partner',
    description: 'Unternehmen und Organisationen können das Portal als Schaufenster für studentische Projekte nutzen. Dies bietet die Möglichkeit, das Ausbildungsniveau der Absolventen zu verstehen, vielversprechende Kandidaten zu finden und mit talentierten Fachkräften in Kontakt zu treten, bevor diese ihr Studium abschließen.'
  }
];

const BenefitSection: React.FC = () => {
  return (
    <section className="px-6 py-3 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Wer wird von der Website profitieren?</h2>
        <p className="max-w-xl text-gray-700">
          Das WHZ-Abschlussarbeiten-Portal wurde als zentrale Anlaufstelle für die Abschlussarbeiten von Studierenden der Westsächsischen Hochschule geschaffen. Es wird für verschiedene Nutzergruppen von Nutzen sein:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
