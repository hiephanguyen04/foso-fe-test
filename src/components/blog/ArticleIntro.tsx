// components/blog/ArticleIntro.tsx
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface ArticleIntroProps {
  imageUrl: string;
  imageAlt: string;
  introText: string;
}

const ArticleIntro: React.FC<ArticleIntroProps> = ({
  imageUrl,
  imageAlt,
  introText,
}) => {
  return (
    <div className="space-y-4">
      <Image
        src={imageUrl}
        width={900}
        height={600}
        alt={imageAlt}
        className="w-full object-fill rounded"
      />
      <div className="px-1 md:px-6 pb-8">
        <div className="relative">
          <div className="absolute -left-2 md:-left-1 -top-2 text-primary-500 text-2xl">
            <FaQuoteLeft />
          </div>
          <p className="text-[#33404A] text-xl italic font-medium text-center px-1 md:px-8 leading-relaxed">
            {introText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleIntro;
