import React from "react";
import ArrowRight from "../assets/ArrowRight.svg"; // Adjust the path as necessary

type ButtonProps = {
  onClick: () => void;
};

const IconPrimaryButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-3 py-3 rounded-md transition duration-200 hover:bg-primaryLight"
    >
        <img src={ArrowRight} alt="Arrow Right" className="w-4 h-4" />
    </button>
  );
};

export default IconPrimaryButton;