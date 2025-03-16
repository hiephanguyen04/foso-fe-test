export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  introText: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  image: string;
  imageDetail: string;
  category: Category;
  tags: string;
  views: number;
  content: string;
  relatedArticles?: Article[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  image: string;
}
