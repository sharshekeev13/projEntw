import React from 'react';
import whzProfil from '../../assets/whzProfil.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // ← импорт useAuth

interface UserProps {
  name: string;
  email: string;
  birthDate: string;
  imageUrl: string;
  onClose?: () => void;
}

const UserCard = ({ name, email, birthDate, imageUrl, onClose }: UserProps) => {
  const { logout } = useAuth(); // ← получаем logout из контекста

  const handleLogout = () => {
    logout();           // вызываем выход
    onClose?.();        // закрываем модалку, если нужно
  };

  return (
    <div className="w-full max-w-2xl rounded-xl p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-lg shadow"
        />
        <div className="w-full">
          <p className="text-gray-600 text-sm">Name</p>
          <h2 className="text-xl font-semibold">{name}</h2>

          <p className="text-gray-600 text-sm mt-4">Email</p>
          <p className="font-semibold">{email}</p>

          <p className="text-gray-600 text-sm mt-4">Geburtsdatum</p>
          <p className="font-semibold">{birthDate}</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/verteidigung-erstellen" onClick={onClose}>
              <button className="bg-blue-900 text-white px-4 py-2 rounded">
                Verteidigung erstellen
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDaten = ({ onClose }: { onClose: () => void }) => {
  return (
    <UserCard
      name="Ernaz Erkinbekov"
      email="whz@beispiel.com"
      birthDate="01/02/2003"
      imageUrl={whzProfil}
      onClose={onClose}
    />
  );
};

export default UserDaten;
