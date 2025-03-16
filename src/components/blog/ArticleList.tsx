// components/blog/ArticleList.tsx
import ArticleCard from "@/components/blog/ArticleCard";
import { Article } from "@/types/article";
import React from "react";

interface ArticleListProps {
  articles: Article[];
  className?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  className = "",
}) => {
  if (!articles || articles.length === 0) {
    return (
      <div className={`text-center py-10 ${className}`}>
        <p className="text-gray-600">No articles found</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
