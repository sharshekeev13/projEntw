import React from 'react';

type Defense = {
  title: string;
  date: string;
  student: string;
  supervisor: string;
  room: string;
  time: string;
};

const DefenseCard: React.FC<{ defense: Defense }> = ({ defense }) => (
  <div className="bg-white rounded shadow p-4 space-y-4 flex flex-col md:flex-row md:justify-between md:items-start">
    {/* Левая часть */}
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
);


export default DefenseCard;
