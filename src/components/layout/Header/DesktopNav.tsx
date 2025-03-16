import ArrowIcon from "@/app/assets/icons/ArrowIcon";
import { menuItems } from "@/constants/routes";
import Link from "next/link";

interface DesktopNavProps {
  activeDropdown: string | null;
  toggleDropdown: (title: string) => void;
  closeDropdowns: () => void;
}

const DesktopNav = ({
  activeDropdown,
  toggleDropdown,
  closeDropdowns,
}: DesktopNavProps) => (
  <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
    {menuItems.map((item) => (
      <div key={item.title} className="relative">
        {item.hasDropdown ? (
          <button
            className="flex items-center text-gray-700 hover:text-green-600 focus:outline-none transition-colors duration-200"
            onClick={() => toggleDropdown(item.title)}
          >
            {item.title}
            <ArrowIcon
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                activeDropdown === item.title ? "transform rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            href={item.path}
            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            {item.title}
          </Link>
        )}

        {item.hasDropdown && activeDropdown === item.title && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50">
            {item.dropdownItems?.map((dropdownItem) => (
              <Link
                key={dropdownItem.title}
                href={dropdownItem.path}
                className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                onClick={closeDropdowns}
              >
                {dropdownItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
);

export default DesktopNav;
