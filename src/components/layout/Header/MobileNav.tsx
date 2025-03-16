import { menuItems } from "@/constants/routes";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (title: string) => void;
  closeMobileMenu: () => void;
}

const MobileNav = ({
  isOpen,
  activeDropdown,
  toggleDropdown,
  closeMobileMenu,
}: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        {menuItems.map((item) => (
          <div key={item.title} className="py-2">
            {item.hasDropdown ? (
              <>
                <button
                  className="flex items-center justify-between w-full text-gray-700 focus:outline-none"
                  onClick={() => toggleDropdown(item.title)}
                >
                  <span>{item.title}</span>
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title
                        ? "transform rotate-180"
                        : ""
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
                </button>
                {activeDropdown === item.title && (
                  <div className="mt-2 ml-4 border-l-2 border-green-500 pl-4">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.path}
                        className="block py-2 text-gray-700 hover:text-green-600"
                        onClick={closeMobileMenu}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className="block text-gray-700 hover:text-green-600"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link
            href="/tro-thanh-khach-hang"
            className="flex items-center justify-center bg-primary hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 gap-2"
            onClick={closeMobileMenu}
          >
            Trở Thành Khách Hàng
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
