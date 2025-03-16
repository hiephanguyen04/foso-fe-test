import Image from "next/image";
import React from "react";

interface SidebarSupportProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
}

const SidebarSupport: React.FC<SidebarSupportProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-6 rounded-lg  ${className}`}>
      <Image
        src={"/images/image1.png"}
        alt="avd1"
        width={366}
        height={650}
        className="w-full object-fill"
      />
      <Image
        src={"/images/image2.png"}
        alt="avd1"
        width={366}
        height={650}
        className="w-full object-fill"
      />
    </div>
  );
};

export default SidebarSupport;
