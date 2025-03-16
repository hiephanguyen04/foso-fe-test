"use client";

import ArticleList from "@/components/blog/ArticleList";
import BlogHeader from "@/components/blog/BlogHeader";
import SidebarCategories from "@/components/blog/SidebarCategories";
import SidebarSupport from "@/components/blog/SidebarSupport";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";
import Sidebar from "@/components/layout/Sidebar";
import { BLOG_CONFIG } from "@/constants/config";
import { ROUTES } from "@/constants/routes";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { SidebarSection } from "@/types/common";

import Image from "next/image";

export default function BlogPage() {
  const regularArticles = articles.slice(0, BLOG_CONFIG.postsPerPage);
  const breadcrumbItems = [
    { ...ROUTES.HOME },
    { ...ROUTES.RESOURCE },
    { ...ROUTES.BLOG, isActive: true },
  ];

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search logic here
  };

  const sidebarSections: SidebarSection[] = [
    {
      title: "search",
      content: <SearchBar onSearch={handleSearch} label="Tìm kiếm" />,
    },
    {
      title: "Categories",
      content: <SidebarCategories categories={categories} />,
    },
    {
      title: "Support",
      content: <SidebarSupport />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <BlogHeader
        breadcrumbItems={breadcrumbItems}
        title="Blog FOSO -"
        subtitle="Cập Nhật Tin Tức Mới Nhất"
        description="Blog FOSO luôn cập nhật thông tin mới nhất về sản phẩm và xu hướng quản lý sản xuất"
      />

      <div className="flex flex-col lg:flex-row gap-8 mt-7 md:mt-15">
        <div className="w-full lg:w-3/4">
          <div className="mb-8">
            <h3 className="text-black text-4xl font-extrabold mb-6">
              Tất cả bài viết
            </h3>
            <div className="relative w-full aspect-[3.3/1] overflow-hidden rounded-lg">
              <Image
                src="/images/banner.png"
                alt="Banner blog FOSO"
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <ArticleList articles={regularArticles} />

          <Pagination
            currentPage={1}
            totalPages={10}
            basePath="/blog"
            className="mt-10"
          />
        </div>

        <Sidebar
          className="hidden lg:block lg:w-1/4"
          sections={sidebarSections}
        />
      </div>
    </div>
  );
}
