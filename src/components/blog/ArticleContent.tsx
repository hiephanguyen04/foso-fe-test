// components/blog/ArticleContent.tsx
import React from "react";

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <div className="blog-content article-prose">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticleContent;
