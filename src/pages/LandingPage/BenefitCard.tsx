import React from 'react';
import { Benefit } from '../../types/Benefit';

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2">{benefit.icon} {benefit.title}</h3>
      <p className="text-sm text-gray-700">{benefit.description}</p>
    </div>
  );
};

export default BenefitCard;
