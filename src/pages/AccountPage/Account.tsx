import whzProfil from '../../assets/whzProfil.jpg';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

interface UserProps {
  name: string;
  email: string;
  birthDate: string;
  imageUrl: string;
  onClose?: () => void;
}

const UserCard = ({ name, email, birthDate, imageUrl, onClose }: UserProps) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
    onClose?.();      
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
