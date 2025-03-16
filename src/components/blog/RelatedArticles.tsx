import SectionTitle from "@/components/common/SectionTitle";
import { Article } from "@/types/article";
import React from "react";
import ArticleCard from "./ArticleCard";

interface RelatedArticlesProps {
  articles: Article[];
  className?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  className = "",
}) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <SectionTitle title="Bài Viết Liên Quan" />
      <div className="flex flex-wrap md:flex-nowrap  gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
