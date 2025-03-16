import { SidebarSection } from "@/types/common";
import React from "react";

interface SidebarProps {
  sections: SidebarSection[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, className = "" }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <aside className={`w-full lg:w-1/3 space-y-6 ${className}`}>
      {sections.map((section, index) => (
        <div key={index}>{section.content}</div>
      ))}
    </aside>
  );
};

export default Sidebar;
