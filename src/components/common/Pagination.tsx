// components/Pagination.tsx
import Link from "next/link";
import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
  className,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex items-center py-8 mt-6 ${className}`}>
      <div className="flex items-center w-full justify-between space-x-1 text-lg">
        <Link
          href={
            currentPage > 1 ? `${basePath}/${currentPage - 1}` : `${basePath}/1`
          }
          className={`flex items-center px-2 py-1 text-gray-500 ${
            currentPage === 1
              ? "pointer-events-none opacity-50"
              : "hover:text-gray-800"
          }`}
          aria-disabled={currentPage === 1}
        >
          <HiOutlineChevronLeft className="mr-1" />
          <span className="hidden md:block">Trang trước</span>
        </Link>

        <div className="flex items-center space-x-1 mx-2">
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-3 py-1 text-gray-500">...</span>
              ) : (
                <Link
                  href={`${basePath}/${page}`}
                  className={`px-3 py-1 rounded-md  ${
                    currentPage === page
                      ? "bg-green-100 text-gray-800 font-medium"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        <Link
          href={
            currentPage < totalPages
              ? `${basePath}/${currentPage + 1}`
              : `${basePath}/${totalPages}`
          }
          className={`flex items-center px-2 py-1 text-gray-500 ${
            currentPage === totalPages
              ? "pointer-events-none opacity-50"
              : "hover:text-gray-800"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          <span className="hidden md:block">Trang kế tiếp</span>
          <HiOutlineChevronRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
