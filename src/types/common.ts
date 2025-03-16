export interface Route {
  path: string;
  title: string;
}

export interface BreadcrumbItem extends Route {
  isActive?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface SidebarSection {
  title: string;
  content: React.ReactNode;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface MenuItem {
  title: string;
  path: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  dropdownItems?: {
    title: string;
    path: string;
  }[];
}
