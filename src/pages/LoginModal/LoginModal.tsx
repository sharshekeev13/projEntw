import React, { useState } from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/authSlice';
import toast from 'react-hot-toast';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(login({ username, password })).unwrap();
      if (resultAction.token) {
        onClose();
      }
    } catch {
      toast.error('Ungültiges Benutzername oder Passwort', {
        position: 'bottom-left',
        duration: 3000
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-center mb-6">Anmeldung</h2>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1">Benutzername</label>
          <div className="flex items-center bg-gray-200 rounded-lg mb-4 px-3 py-2">
            <UserIcon className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Example"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent flex-1 outline-none text-sm"
              required
            />
          </div>

          <label className="block text-sm mb-1">Passwort</label>
          <div className="flex items-center bg-gray-200 rounded-lg mb-6 px-3 py-2">
            <LockClosedIcon className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent flex-1 outline-none text-sm"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">Ungültiges Benutzername oder Passwort</p>}

          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg hover:bg-blue-800 disabled:opacity-50"
            style={{ backgroundColor: 'rgb(37,58,103)' }}
            disabled={loading}
          >
            {loading ? 'Wird geprüft...' : 'Anmelden'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
