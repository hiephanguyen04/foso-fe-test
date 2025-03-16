import Header from "@/components/layout/Header";
import { SITE_CONFIG } from "@/constants/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "FOSO",
    "quản lý sản xuất",
    "ERP",
    "MRP",
    "doanh nghiệp",
    "sản xuất",
    "phần mềm",
  ],
  authors: [{ name: "FOSO Team" }],
  creator: "FOSO",
  publisher: "FOSO",
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: SITE_CONFIG.colors.primary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#F9FBFC]">
        <Header />
        <main className="flex-grow mt-32">{children}</main>
      </body>
    </html>
  );
}
