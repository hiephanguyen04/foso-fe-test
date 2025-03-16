import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import PencialIcon from "@/app/assets/icons/PencialIcon";
import Breadcrumb from "@/components/common/Breadcrumb";
import { BreadcrumbItem } from "@/types/common";
import React from "react";

interface BlogHeaderProps {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  subtitle: string;
  description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  breadcrumbItems,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <CalendarIcon className="hidden md:block" />

      <div className="flex flex-col justify-between items-center">
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-center px-4 py-4 md:py-8">
          <h1 className="font-normal text-4xl md:text-6xl mb-2">
            {title} <span className="text-primary font-bold">FOSO</span>
          </h1>

          <h2 className="font-normal text-3xl md:text-6xl mb-4">
            {subtitle.split("Mới Nhất")[0]}
            <span className="relative inline-block">
              <span className="relative font-bold z-10">Mới Nhất</span>
              <span className="absolute bottom-0 left-0 w-full h-5 rounded-2xl bg-primary/30 -z-0"></span>
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-[18px] mx-auto max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      <PencialIcon className="hidden md:block" />
    </div>
  );
};

export default BlogHeader;
