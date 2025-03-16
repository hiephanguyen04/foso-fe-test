// components/Badge.tsx
import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
  color?: "blue" | "green" | "red" | "orange" | "purple" | "custom";
  customColors?: {
    background: string;
    text: string;
  };
}

const Badge: React.FC<BadgeProps> = ({
  text,
  className = "",
  color = "blue",
  customColors,
}) => {
  // Default color schemes
  const colorSchemes = {
    blue: "bg-[#E2F0FE] text-[#0F4F9E]",
    green: "bg-[#E3F8EF] text-[#0B6E4F]",
    red: "bg-[#FDE8E8] text-[#B91C1C]",
    orange: "bg-[#FEF3C7] text-[#92400E]",
    purple: "bg-[#F3E8FD] text-[#6D28D9]",
    custom: customColors
      ? `bg-[${customColors.background}] text-[${customColors.text}]`
      : "",
  };

  const colorClasses =
    color === "custom" && customColors
      ? `bg-[${customColors.background}] text-[${customColors.text}]`
      : colorSchemes[color];

  return (
    <div>
      <span
        className={`inline-block px-2 py-1 text-xs rounded-lg ${colorClasses} ${className}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
