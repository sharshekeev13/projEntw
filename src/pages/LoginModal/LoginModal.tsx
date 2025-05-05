// components/LoginModal.tsx
import React from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';


interface LoginModalProps {
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {


    const { login } = useAuth();
    const fakeLogin = () => {
        const user = {
            name: 'Max Mustermann',
            role: 'Student',
        };
        login(user);
        onClose();
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

                <label className="block text-sm mb-1">Benutzername</label>
                <div className="flex items-center bg-gray-200 rounded-lg mb-4 px-3 py-2">
                    <UserIcon className="w-5 h-5 text-gray-500 mr-2" />
                    <input type="text" placeholder="Example" className="bg-transparent flex-1 outline-none text-sm" />
                </div>

                <label className="block text-sm mb-1">Passwort</label>
                <div className="flex items-center bg-gray-200 rounded-lg mb-6 px-3 py-2">
                    <LockClosedIcon className="w-5 h-5 text-gray-500 mr-2" />
                    <input type="password" placeholder="********" className="bg-transparent flex-1 outline-none text-sm" />
                </div>

                <button className="w-full text-white py-2 rounded-lg hover:bg-blue-800" style={{backgroundColor: 'rgb(37,58,103)'}} onClick={fakeLogin}>
                    Anmelden
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
