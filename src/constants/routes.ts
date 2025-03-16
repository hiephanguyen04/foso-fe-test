import { MenuItem, Route } from "@/types/common";

export const ROUTES = {
  HOME: {
    path: "/",
    title: "Trang chủ",
  },
  ABOUT: {
    path: "/ve-chung-toi",
    title: "Về Chúng tôi",
  },
  SOLUTION: {
    title: "Giải pháp",
    path: "/giai-phap",
  },
  RESOURCE: {
    title: "Tài nguyên",
    path: "/tai-nguyên",
  },
  PRODUCTS: {
    path: "/san-pham",
    title: "Sản phẩm",
  },
  PRICING: {
    path: "/bang-gia",
    title: "Bảng giá",
  },
  BLOG: {
    path: "/blog",
    title: "Blog",
  },
  CONTACT: {
    path: "/lien-he",
    title: "Liên hệ",
  },
};

export const menuItems: MenuItem[] = [
  {
    title: "Về Chúng tôi",
    path: "/ve-chung-toi",
  },
  {
    title: "Giải pháp",
    path: "/giai-phap",
    hasDropdown: true,
    dropdownItems: [
      { title: "Giải pháp A", path: "/giai-phap/giai-phap-a" },
      { title: "Giải pháp B", path: "/giai-phap/giai-phap-b" },
      { title: "Giải pháp C", path: "/giai-phap/giai-phap-c" },
    ],
  },
  {
    title: "Tài nguyên",
    path: "/tai-nguyen",
    hasDropdown: true,
    dropdownItems: [
      { title: "Blog", path: "/blog" },
      { title: "Tài liệu", path: "/tai-lieu" },
      { title: "Webinar", path: "/webinar" },
    ],
  },
  {
    title: "Liên hệ",
    path: "/lien-he",
  },
];

export const NAVIGATION: Route[] = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.PRODUCTS,
  ROUTES.BLOG,
  ROUTES.CONTACT,
];

export const FOOTER_LINKS = {
  quickLinks: [
    ROUTES.HOME,
    ROUTES.ABOUT,
    ROUTES.PRODUCTS,
    ROUTES.PRICING,
    ROUTES.BLOG,
    ROUTES.CONTACT,
  ],
  legal: [
    {
      path: "/dieu-khoan-su-dung",
      title: "Điều khoản sử dụng",
    },
    {
      path: "/chinh-sach-bao-mat",
      title: "Chính sách bảo mật",
    },
    {
      path: "/chinh-sach-cookie",
      title: "Chính sách cookie",
    },
    {
      path: "/chinh-sach-hoan-tien",
      title: "Chính sách hoàn tiền",
    },
  ],
};

export default ROUTES;
