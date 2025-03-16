"use client";

import LanguageSelector from "@/components/common/LanguageSelector";
import { Language } from "@/types/common";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("vi");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleLanguageChange = (language: Language) => {
    console.log(`Language changed to: ${language.name} (${language.code})`);
    setCurrentLanguage(language.code);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F9FBFC] transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center gap-16 justify-between bg-[#ffffff] px-3 md:justify-center py-3 rounded-full shadow-sm">
          <Logo />

          <DesktopNav
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            closeDropdowns={closeDropdowns}
          />

          <div className="flex items-center space-x-4">
            <LanguageSelector
              defaultLanguage={currentLanguage}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-full h-[38px]"
            />

            <ActionButton className="hidden md:flex" />

            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        <MobileNav
          isOpen={isMobileMenuOpen}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
