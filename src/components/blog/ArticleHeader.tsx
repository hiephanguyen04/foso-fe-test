// components/blog/ArticleHeader.tsx
import LogoAuthor from "@/app/assets/icons/LogoAuthor";
import Badge from "@/components/common/Badge";
import { CalendarIcon, ClockIcon } from "@/components/common/icons";
import React from "react";

interface ArticleHeaderProps {
  title: string;
  author: string;
  updatedAt: string | undefined;
  readTime: number;
  category?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  author,
  updatedAt,
  readTime,
  category = "Quản Lý Sản Xuất",
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4">
        <Badge text={category} />
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{title}</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-1 items-center">
            <LogoAuthor />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-500">Tác giả</p>
              <span className="text-[16px] text-[#33404A] font-bold">
                {author}
              </span>
            </div>
          </div>
          <div className="flex items-center text-[15px] text-gray-500 space-x-4">
            <div className="flex items-center md:border-r md:pr-4 md:border-[#D9E1E7]">
              <CalendarIcon className="w-4 h-4 mr-1" size={16} />
              Cập nhật vào: {updatedAt}
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1" size={16} />
              {readTime} phút đọc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
