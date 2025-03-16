import { ButtonProps } from "@/types/common";
import Link from "next/link";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  href,
  onClick,
  ...rest
}) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    outline:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    text: "bg-transparent text-blue-600 hover:underline",
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const buttonStyles = `
    inline-flex items-center justify-center 
    rounded-md transition-colors duration-200
    font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  // Create button content with proper icon positioning
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <span className={`${children ? "mr-2" : ""}`}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={`${children ? "ml-2" : ""}`}>{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonStyles} {...rest}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} type="button" {...rest}>
      {buttonContent}
    </button>
  );
};

export default Button;
