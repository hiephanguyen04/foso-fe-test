// app/blog/[slug]/page.tsx
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleFeedbackWrapper from "@/components/blog/ArticleFeedbackWrapper";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleIntro from "@/components/blog/ArticleIntro";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SidebarCategories from "@/components/blog/SidebarCategories";
import SidebarSupport from "@/components/blog/SidebarSupport";
import SidebarTableOfContents from "@/components/blog/SidebarTableOfContents";
import SocialShare from "@/components/blog/SocialShare";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import { getArticleBySlug } from "@/data/articles";
import { categories } from "@/data/categories";
import { createArticleBreadcrumbs } from "@/lib/utils";
import { SidebarSection } from "@/types/common";
import { notFound } from "next/navigation";
import { use } from "react";

type TParams = Promise<{ slug: string }>;
export default function BlogDetailPage(props: { params: TParams }) {
  const params = use(props.params);
  const slug = params.slug;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }
  const breadcrumbItems = createArticleBreadcrumbs(article.title);

  const sidebarSections: SidebarSection[] = [
    {
      title: "Nội Dung Bài Viết",
      content: <SidebarTableOfContents content={article.content} />,
    },
    {
      title: "Danh Mục",
      content: <SidebarCategories categories={categories} />,
    },
    {
      title: "Hỗ Trợ",
      content: <SidebarSupport />,
    },
  ];

  return (
    <div className="bg-[#F9FBFC] min-h-screen flex">
      <div className="hidden lg:block mx-auto pt-40">
        <SocialShare url="" title="Chia sẻ" />
      </div>
      <div className="container mx-auto px-4 pb-6 md:py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="w-full flex flex-wrap-reverse md:flex-nowrap gap-8">
              <div className="w-full md:flex-1">
                <ArticleHeader
                  title={article.title}
                  author={article.author}
                  updatedAt={article.updatedAt}
                  readTime={article.readTime}
                  category={article.tags}
                />

                <ArticleIntro
                  imageUrl={article.imageDetail}
                  imageAlt={article.title}
                  introText={article.introText}
                />

                <ArticleContent content={article.content} />

                <ArticleFeedbackWrapper
                  initialCounts={{
                    useful: 1,
                    love: 2,
                    funny: 0,
                    surprised: 1,
                    boring: 0,
                    angry: 0,
                  }}
                />
              </div>

              <Sidebar
                className="w-full md:w-80 lg:w-96"
                sections={sidebarSections}
              />
            </div>

            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <RelatedArticles
                className="mt-10"
                articles={article.relatedArticles}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
