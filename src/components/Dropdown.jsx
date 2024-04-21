import React, { useState } from "react";

const Dropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}>{text}</button>
      {isOpen && (
        <div className="absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
