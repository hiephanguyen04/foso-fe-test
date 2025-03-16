"use client";

import { Language } from "@/types/common";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const languages: Language[] = [
  {
    code: "vi",
    name: "Tiếng Việt",
    flag: "/images/flags/vi.svg",
  },
  {
    code: "en",
    name: "English",
    flag: "/images/flags/en.svg",
  },
];

interface LanguageSelectorProps {
  onChange?: (language: Language) => void;
  className?: string;
  defaultLanguage?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onChange,
  className = "",
  defaultLanguage = "vi",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set default language on mount
  useEffect(() => {
    const language =
      languages.find((lang) => lang.code === defaultLanguage) || languages[0];
    setSelectedLanguage(language);
  }, [defaultLanguage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    if (onChange) {
      onChange(language);
    }
  };

  if (!selectedLanguage) return null;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors  h-[38px]"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 overflow-hidden rounded-full flex-shrink-0">
            <Image
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
          <span className="font-medium text-gray-800 uppercase">
            {selectedLanguage.code}
          </span>
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute mt-2 z-10 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  type="button"
                  className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    selectedLanguage.code === language.code
                      ? "bg-gray-50 font-medium"
                      : ""
                  }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <div className="relative w-6 h-6 overflow-hidden rounded-full flex-shrink-0 mr-3">
                    <Image
                      src={language.flag}
                      alt={language.name}
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <span>{language.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
