import React from 'react';
import whzProfil from '../../assets/whzProfil.jpg';
import { Link } from 'react-router-dom';

interface UserProps {
  name: string;
  email: string;
  birthDate: string;
  imageUrl: string;
}

const UserCard = ({ name, email, birthDate, imageUrl }: UserProps) => (
  <div className="min-h-screen bg-white flex items-center justify-center px-4">
    <div className="w-full max-w-screen-md bg-white rounded-xl border border-gray-200 shadow-xl p-8">
      <button className="text-sm text-gray-600 mb-6 flex items-center gap-2 hover:text-blue-900">
        <span>&larr;</span> Zurück
      </button>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-48 h-48 object-cover rounded-lg shadow"
        />
        <div className="w-full">
          <p className="text-gray-600 text-sm">Name</p>
          <h2 className="text-xl font-semibold">{name}</h2>

          <p className="text-gray-600 text-sm mt-4">Email</p>
          <p className="font-semibold">{email}</p>

          <p className="text-gray-600 text-sm mt-4">Geburtsdatum</p>
          <p className="font-semibold">{birthDate}</p>

          <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6">
            <button className="bg-blue-900 text-white px-4 py-2 rounded w-full md:w-auto">
              Profile bearbeiten
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded w-full md:w-auto">
              Monitor bearbeiten
            </button>
            <Link to="/verteidigung-erstellen">
              <button className="bg-blue-900 text-white px-4 py-2 rounded">
                Verteidigung erstellen
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UserDaten = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <UserCard
        name="Ernaz Erkinbekov"
        email="whz@beispiel.com"
        birthDate="01/02/2003"
        imageUrl={whzProfil}
      />
    </div>
  );
};

export default UserDaten;
