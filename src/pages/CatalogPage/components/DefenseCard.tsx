import React from 'react';
import { Defense } from '../../../types/Defense';

const DefenseCard: React.FC<{ defense: Defense }> = ({ defense }) => (
  <div className="h-auto bg-white rounded shadow flex p-4 flex-col lg:flex-row lg:justify-between lg:items-start lg:h-48">
     <div className={
      `h-4 w-full rounded lg:h-40 mb-4 shadow-lg lg:mb-0 lg:mr-4 lg:w-4 ${
      defense.typeOfDefense === "Bachelor" ? "bg-blue-700" : "bg-green-700"}`}></div>
    {/* Левая часть */}
    <div className='flex-1 flex flex-col md:flex-row md:justify-between md:items-start'>
      <div className="flex-1 space-y-2">
      <div>
        <span className="text-grayText text-sm">Thema:</span>
        <h3 className="font-semibold text-gray-800 text-lg">{defense.title}</h3>
      </div>
      <div>
        <span className="text-grayText text-sm">Autor:</span>
        <h6 className="font-semibold text-gray-800 text-sm">{defense.student}</h6>
      </div>
      <div>
        <span className="text-grayText text-sm">Betreuer:</span>
        <h6 className="font-semibold text-gray-800 text-sm">{defense.supervisor}</h6>
      </div>
    </div>

    {/* Правая часть */}
    <div className="space-y-2 mt-4 md:mt-0 md:text-right">
      <div>
        <span className="text-grayText text-sm">Datum:</span>
        <h6 className="font-semibold text-gray-800 text-sm">{defense.date}</h6>
      </div>
      <div>
        <span className="text-grayText text-sm">Raum:</span>
        <h6 className="font-semibold text-gray-800 text-sm">{defense.room}</h6>
      </div>
      <div>
        <span className="text-grayText text-sm">Zeit:</span>
        <h6 className="font-semibold text-gray-800 text-sm">{defense.time}</h6>
      </div>
    </div>
    </div>
  </div>
);


export default DefenseCard;
