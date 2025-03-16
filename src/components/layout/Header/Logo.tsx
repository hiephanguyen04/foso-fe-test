import { SITE_CONFIG } from "@/constants/config";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href={ROUTES.HOME.path} className="flex items-center">
    {SITE_CONFIG.logo ? (
      <Image
        src={SITE_CONFIG.logo}
        alt={SITE_CONFIG.name}
        width={100}
        height={40}
        className="h-10 w-auto"
      />
    ) : (
      <span className="text-2xl font-bold text-green-600">
        {SITE_CONFIG.name}
      </span>
    )}
  </Link>
);

export default Logo;
