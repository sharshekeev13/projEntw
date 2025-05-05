import React from "react";


type ButtonProps = {
  label: string;
  onClick: () => void;
};


const ButtonPrimary: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-4 py-2 rounded transition duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-105"
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;

