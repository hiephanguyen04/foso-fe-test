"use client";
import ReactIcon1 from "@/app/assets/icons/ReactIcon1";
import ReactIcon2 from "@/app/assets/icons/ReactIcon2";
import ReactIcon3 from "@/app/assets/icons/ReactIcon3";
import ReactIcon4 from "@/app/assets/icons/ReactIcon4";
import ReactIcon5 from "@/app/assets/icons/ReactIcon5";
import ReactIcon6 from "@/app/assets/icons/ReactIcon6";
import React, { ReactNode, useState } from "react";

interface ReactionOption {
  emoji: ReactNode;
  label: string;
  id: string;
  count: number;
}

interface ArticleFeedbackProps {
  initialCounts?: {
    [key: string]: number;
  };
  onReactionSelect?: (reactionId: string) => void;
}

const ArticleFeedback: React.FC<ArticleFeedbackProps> = ({
  initialCounts = {
    useful: 1,
    love: 2,
    funny: 0,
    surprised: 1,
    boring: 0,
    angry: 0,
  },
  onReactionSelect,
}) => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [reactions, setReactions] = useState<ReactionOption[]>([
    {
      emoji: <ReactIcon1 />,
      label: "Hữu ích",
      id: "useful",
      count: initialCounts.useful || 0,
    },
    {
      emoji: <ReactIcon2 />,
      label: "Yêu thích",
      id: "love",
      count: initialCounts.love || 0,
    },
    {
      emoji: <ReactIcon3 />,
      label: "Thú vị",
      id: "funny",
      count: initialCounts.funny || 0,
    },
    {
      emoji: <ReactIcon4 />,
      label: "Bất ngờ",
      id: "surprised",
      count: initialCounts.surprised || 0,
    },
    {
      emoji: <ReactIcon5 />,
      label: "Nhàm chán",
      id: "boring",
      count: initialCounts.boring || 0,
    },
    {
      emoji: <ReactIcon6 />,
      label: "Tức giận",
      id: "angry",
      count: initialCounts.angry || 0,
    },
  ]);

  const handleReactionClick = (id: string) => {
    if (selectedReaction === id) {
      setSelectedReaction(null);
      setReactions(
        reactions.map((reaction) =>
          reaction.id === id
            ? { ...reaction, count: reaction.count - 1 }
            : reaction
        )
      );
    } else {
      if (selectedReaction) {
        setReactions(
          reactions.map((reaction) =>
            reaction.id === selectedReaction
              ? { ...reaction, count: reaction.count - 1 }
              : reaction.id === id
              ? { ...reaction, count: reaction.count + 1 }
              : reaction
          )
        );
      } else {
        setReactions(
          reactions.map((reaction) =>
            reaction.id === id
              ? { ...reaction, count: reaction.count + 1 }
              : reaction
          )
        );
      }
      setSelectedReaction(id);
    }

    if (onReactionSelect) {
      onReactionSelect(id);
    }
  };
  const totalReactions = reactions.reduce(
    (sum, reaction) => sum + reaction.count,
    0
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-10">
      <h3 className="text-center text-xl font-extrabold text-[#33404A] mb-4">
        Bạn thấy bài viết như thế nào?
      </h3>
      <p className="text-center text-gray-500 mb-6">
        {totalReactions} phản hồi
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {reactions.map((reaction) => (
          <div
            key={reaction.id}
            onClick={() => handleReactionClick(reaction.id)}
            className={`flex flex-col w-26 items-center cursor-pointer px-2 py-3  rounded-lg transition-all ${
              selectedReaction === reaction.id
                ? "border-2 border-[#15AA7A] bg-[#F5FFFA]"
                : " border-2 border-transparent hover:border-[#15AA7A]/50"
            }`}
          >
            <div className="flex flex-col gap-2 items-center justify-center ">
              <div className="text-3xl mb-1">{reaction.emoji}</div>
              <div className="font-medium text-gray-700">{reaction.count}</div>
              <span
                className={`text-sm text-center ${
                  selectedReaction === reaction.id
                    ? "text-[#15AA7A]"
                    : "text-[#33404A]"
                }`}
              >
                {reaction.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleFeedback;
