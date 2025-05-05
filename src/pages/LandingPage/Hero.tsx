import React from 'react';
import backgroundImage from '../../assets/landing/background-image.png'; // ✅
import graduationCap from '../../assets/landing/graduation-cap.svg';

const Hero: React.FC = () => {
    return (
        <div
            className="relative w-full h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                <img src={graduationCap} alt="Logo" className="w-26 h-26" />
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Willkommen auf dem<br /> Verteidigungsportal der WHZ!
                </h1>
                <p className="text-lg max-w-xl">
                    Dieses Portal richtet sich an Studierende, Lehrende und alle Interessierten, die mehr über Graduiertenprojekte an der Westsächsischen Hochschule erfahren möchten.
                </p>
            </div>
        </div>
    );
};

export default Hero;
