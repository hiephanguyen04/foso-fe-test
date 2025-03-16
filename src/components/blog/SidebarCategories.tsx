import { Category } from "@/types/article";
import Link from "next/link";
import React from "react";

interface SidebarCategoriesProps {
  categories: Category[];
  className?: string;
}

const SidebarCategories: React.FC<SidebarCategoriesProps> = ({
  categories,
  className = "",
}) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-black text-2xl font-extrabold mb-6">Danh Mục</h3>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-between items-center py-1 border-b last:border-b-0 border-gray-100 text-lg font-medium"
          >
            <Link
              href={`/blog/category/${category.slug}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-gray-500 ">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategories;
