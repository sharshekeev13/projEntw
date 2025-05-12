import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-6 text-gray-600 hover:text-gray-700 text-4xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
