import Link from "next/link";

interface ActionButtonProps {
  className?: string;
}

const ActionButton = ({ className = "" }: ActionButtonProps) => (
  <Link
    href="/tro-thanh-khach-hang"
    className={`items-center h-[38px] bg-primary hover:bg-green-600 text-[#052B1E] py-2 px-3 gap-2 rounded-full transition-colors duration-200 text-sm font-bold ${className}`}
  >
    Trở Thành Khách Hàng
    <div className="p-2 rounded-full bg-black">
      <svg
        className="w-3 h-3 text-white"
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
    </div>
  </Link>
);

export default ActionButton;
