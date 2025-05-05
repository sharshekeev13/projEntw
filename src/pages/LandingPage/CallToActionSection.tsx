// components/CallToActionSection.tsx
import React from 'react';
import backgroundImage from '../../assets/landing/library.png'; 

const CallToActionSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> 
      <div className="relative z-10 text-left px-8 max-w-2xl">
        <h2 className="text-white text-2xl font-bold leading-relaxed">
          <span className="bg-white text-blue-900 px-2">
            Sind Sie bereit, loszulegen? Besuchen Sie
          </span><br />
          <span className="bg-white text-blue-900 px-2">
            den Katalog oder informieren Sie sich über
          </span><br />
          <span className="bg-white text-blue-900 px-2">
            die nächstgelegenen Verteidigungsstellen!
          </span>
        </h2>
        <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
          Zu den Arbeiten
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;
