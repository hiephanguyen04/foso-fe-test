"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
  children: TableOfContentsItem[];
}

interface SidebarTableOfContentsProps {
  content: string;
  className?: string;
  title?: string;
  collapsible?: boolean;
  headingSelectors?: string;
  activeItemOffset?: number;
  highlightActiveItem?: boolean;
}

const SidebarTableOfContents: React.FC<SidebarTableOfContentsProps> = ({
  content,
  className = "",
  title = "Nội Dung Bài Viết",
  collapsible = true,
  headingSelectors = "h2, h3",
  activeItemOffset = -100,
  highlightActiveItem = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tocItems = useMemo(() => {
    if (!content || !isMounted) return [];

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const headings = doc.querySelectorAll(headingSelectors);

      const items: TableOfContentsItem[] = [];
      let currentH2Item: TableOfContentsItem | null = null;

      headings.forEach((heading) => {
        const text = heading.textContent?.trim() || "";
        if (!text) return; // Skip empty headings

        // Generate or use existing ID
        const id =
          heading.id ||
          text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "") // Remove special chars except whitespace & hyphen
            .replace(/\s+/g, "-") // Replace whitespace with hyphens
            .replace(/-+/g, "-"); // Collapse multiple hyphens

        const level = heading.tagName === "H2" ? 1 : 2;

        const item: TableOfContentsItem = {
          id,
          text,
          level,
          children: [],
        };

        if (level === 1) {
          items.push(item);
          currentH2Item = item;
        } else if (level === 2 && currentH2Item) {
          currentH2Item.children.push(item);
        }
      });

      return items;
    } catch (error) {
      console.error("Error parsing content for table of contents:", error);
      return [];
    }
  }, [content, headingSelectors, isMounted]);

  // Set up observer to track active heading during scroll
  useEffect(() => {
    if (!highlightActiveItem || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `0px 0px ${activeItemOffset}px 0px`,
        threshold: 0.1,
      }
    );

    // Ensure we have the heading elements
    const headingElements = document.querySelectorAll(headingSelectors);
    headingElements.forEach((element) => {
      if (element.id) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems, activeItemOffset, headingSelectors, highlightActiveItem]);

  // Handle scroll to section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      // Update URL without a full page reload
      window.history.pushState({}, "", `#${id}`);

      // Scroll to element with smooth behavior
      const yOffset = activeItemOffset;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActiveId(id);
    }
  };

  if (!isMounted) {
    return (
      <div className={`bg-white p-5 rounded-lg shadow-sm ${className}`}></div>
    );
  }

  if (!content || tocItems.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white p-5 rounded-lg shadow-sm ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-2xl text-gray-800">{title}</h3>
        {collapsible && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-[#15AA7A] transition-colors focus:outline-none"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Thu gọn mục lục" : "Mở rộng mục lục"}
          >
            <FaAngleDown
              className={`w-5 h-5 transform transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {isExpanded && (
        <ul className="space-y-2.5 text-lg font-medium">
          {tocItems.map((item) => (
            <li key={item.id} className="pb-0.5">
              <Link
                href={`#${item.id}`}
                className={`block text-[#231F20] hover:text-[#15AA7A] transition-colors ${
                  activeId === item.id ? "text-[#15AA7A] font-medium" : ""
                }`}
                onClick={(e) => scrollToSection(e, item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
              >
                {`${item.text}`}
              </Link>

              {item.children.length > 0 && (
                <ul className="pl-5 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={`#${child.id}`}
                        className={`block text-[#231F20] hover:text-[#15AA7A] transition-colors ${
                          activeId === child.id
                            ? "text-[#15AA7A] font-medium"
                            : ""
                        }`}
                        onClick={(e) => scrollToSection(e, child.id)}
                        aria-current={
                          activeId === child.id ? "true" : undefined
                        }
                      >
                        {`${child.text}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarTableOfContents;
