import React, { useState } from "react";

interface dropdownProps {
    receivedText:string
    receivedSubText : string
}

const Dropdown = ({receivedText , receivedSubText} : dropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(receivedText)
  const [subText, setSubText] = useState(receivedSubText)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {text} : {subText}
          <svg
            className="ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-5-5h10l-5 5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="py-1">
            <li
              className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </li>
            <li
              className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </li>
            <li
              className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
