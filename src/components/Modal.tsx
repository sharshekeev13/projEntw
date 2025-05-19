import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      onClick={onClose} // ← клик по фону закрывает модалку
    >
      <div
        className="relative bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // ← предотвратить закрытие при клике внутри окна
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
