import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@/components/common/icons";
import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "../common/Badge";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className = "",
}) => {
  return (
    <div
      className={`bg-white shadow-xs hover:shadow-lg  overflow-hidden  ${className}`}
    >
      <Link href={`/blog/${article.slug}`}>
        <div className="relative w-full rounded-xl overflow-hidden ">
          <Image
            src={article.image}
            alt={article.title}
            height={475}
            width={505}
            className="object-fill  hover:scale-110 transition-all duration-300 ease-in-out w-full"
          />
        </div>

        <div className="flex flex-col gap-4  p-4">
          <Badge text={article.tags} />
          <h3 className="text-2xl font-extrabold hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <div className="flex items-center text-[15px] text-gray-500 space-x-4">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" size={16} />
              {article.publishedAt}
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1" size={16} />
              10 phút đọc
            </div>
          </div>

          <span className="inline-flex items-center text-[#667F93] text-lg hover:underline">
            Khám phá thêm
            <ChevronRightIcon className="w-4 h-4 ml-1" size={16} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
