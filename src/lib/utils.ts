import { ROUTES } from "@/constants/routes";
import { BreadcrumbItem } from "@/types/common";

export const createArticleBreadcrumbs = (title: string): BreadcrumbItem[] => {
  return [
    { ...ROUTES.HOME },
    { ...ROUTES.BLOG },
    { path: "#", title, isActive: true },
  ];
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  if (dateString.includes("tháng")) {
    return dateString;
  }

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
};

export const slugify = (text: string): string => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
