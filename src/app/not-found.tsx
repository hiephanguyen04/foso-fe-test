import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-gray-50">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        404
      </h1>
      <p className="mb-8 text-xl font-semibold text-gray-700">
        Trang không tìm thấy
      </p>
      <p className="max-w-md mb-8 text-center text-gray-500">
        Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có thể trang này
        đã bị di chuyển hoặc đã bị xóa.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors bg-primary hover:bg-primary-500 rounded-md"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
