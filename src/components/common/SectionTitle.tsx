import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number?: number | string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "default" | "primary" | "secondary";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  number,
  className = "",
  as: Component = "h2",
  color = "default",
}) => {
  const colorClasses = {
    default: "text-gray-900",
    primary: "text-blue-700",
    secondary: "text-green-700",
  };

  return (
    <div className={`mb-6 ${className}`}>
      <Component
        className={`flex items-center text-3xl font-extrabold ${colorClasses[color]}`}
      >
        {number && (
          <span className="mr-2">
            {typeof number === "number" ? `${number}.` : number}
          </span>
        )}
        {title}
      </Component>

      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
