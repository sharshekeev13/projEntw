import React from 'react';
import Logo from '../assets/logo_whz.svg';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from '../pages/LoginModal/LoginModal';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <header className="w-full shadow-md bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="WHZ Logo" className="h-12 w-32" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {['Startseite', 'Über uns', 'Verteidigungen'].map((label) => (
            <a key={label} href="#" className="group relative w-max text-sm">
              <span className="hover:text-primary transition duration-300">{label}</span>
              <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-full"></span>
            </a>
          ))}
          {user ? (
            <a key="Account" href="#" className="group relative w-max text-sm">
              <span className="hover:text-primary transition duration-300">Account</span>
              <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-full"></span>
            </a>
          ) : (
            <a
              key="Login"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowLoginModal(true);
              }}
              className="group relative w-max text-sm"
            >
              <span className="hover:text-primary transition duration-300">Login</span>
              <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-full"></span>
            </a>

          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col p-4 space-y-2 text-sm">
            {['Startseite', 'Über uns', 'Verteidigungen'].map((label) => (
              <a key={label} href="#" className="hover:text-primary transition">
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

    </header>

  );
};

export default Header;

