// src/app/error.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-gray-50">
      <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-red-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-red-600"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Đã xảy ra lỗi
      </h1>
      <p className="max-w-md mb-8 text-center text-gray-500">
        Rất tiếc, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors bg-primary hover:bg-primary/90 rounded-md"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
