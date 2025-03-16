// components/ArticleFeedbackWrapper.tsx
"use client";

import ArticleFeedback from "./ArticleFeedback";

// Define interface for the initialCounts prop
interface InitialCountsProps {
  [key: string]: number;
}

export default function ArticleFeedbackWrapper({
  initialCounts,
}: {
  initialCounts: InitialCountsProps;
}) {
  const handleReactionSelect = (reactionId: string) => {
    console.log(`Selected reaction: ${reactionId}`);
  };

  return (
    <ArticleFeedback
      initialCounts={initialCounts}
      onReactionSelect={handleReactionSelect}
    />
  );
}
