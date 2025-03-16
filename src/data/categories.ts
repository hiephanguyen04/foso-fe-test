import { Category } from "@/types/article";

export const categories: Category[] = [
  {
    id: "all",
    name: "Tất cả",
    slug: "all",
    count: 140,
  },
  {
    id: "kanbanize",
    name: "Thời Sự Kanbanize",
    slug: "thoi-su-kanbanize",
    count: 28,
  },
  {
    id: "montela",
    name: "Thời Sự App Montela",
    slug: "thoi-su-app-montela",
    count: 13,
  },
  {
    id: "kho-thap",
    name: "Quản Lý Kho Thập",
    slug: "quan-ly-kho-thap",
    count: 26,
  },
  {
    id: "foso",
    name: "Giải Chí Viết Về FOSO",
    slug: "giai-chi-viet-ve-foso",
    count: 20,
  },
  {
    id: "docs",
    name: "Tài Liệu FOSO",
    slug: "tai-lieu-foso",
    count: 6,
  },
];

export default categories;
