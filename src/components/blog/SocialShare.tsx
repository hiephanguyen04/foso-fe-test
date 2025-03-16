"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  className = "",
}) => {
  const handleShare = (platform: string) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title)}`;
        break;
      case "zalo":
        shareUrl = `https://zalo.me/article/share?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h3 className="text-[#333] text-lg font-extrabold mb-4">Chia sẻ</h3>

      <div className="flex flex-col space-y-4">
        {/* Zalo */}
        <button
          onClick={() => handleShare("zalo")}
          className="w-14 h-14 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] flex items-center justify-center transition hover:bg-[#4CAF50] hover:text-white"
          aria-label="Chia sẻ qua Zalo"
        >
          <div className="relative w-6 h-6">
            <svg viewBox="0 0 33 33" className="w-6 h-6 fill-current">
              <path d="M16.5 0C7.3875 0 0 7.3875 0 16.5C0 25.6125 7.3875 33 16.5 33C25.6125 33 33 25.6125 33 16.5C33 7.3875 25.6125 0 16.5 0ZM18.9913 9.4053C19.6554 9.4053 20.196 9.9455 20.196 10.6096C20.196 11.2741 19.6554 11.8143 18.9913 11.8143C18.328 11.8143 17.7874 11.2741 17.7874 10.6096C17.7874 9.9455 18.328 9.4053 18.9913 9.4053ZM14.3198 9.4053C14.984 9.4053 15.5245 9.9455 15.5245 10.6096C15.5245 11.2741 14.984 11.8143 14.3198 11.8143C13.6556 11.8143 13.1155 11.2741 13.1155 10.6096C13.1155 9.9455 13.6556 9.4053 14.3198 9.4053ZM24.9441 15.1733C24.9441 20.8088 19.3875 25.3745 16.6646 25.3745C13.9421 25.3745 14.9639 23.9745 12.9956 23.9745C11.0266 23.9745 6.9 21.1762 6.9 15.1733C6.9 11.4305 11.3667 8.3963 16.0224 8.3963C20.6792 8.3963 24.9441 11.3429 24.9441 15.1733ZM22.482 15.7908C22.482 13.0904 19.4241 10.9041 15.7131 10.9041C12.0024 10.9041 8.94384 13.0904 8.94384 15.7908C8.94384 18.4908 12.0024 20.6764 15.7131 20.6764C16.65 20.6764 16.896 20.37 17.8964 20.37C18.8971 20.37 20.7279 22.8345 21.672 22.8345C22.6157 22.8345 22.482 18.4908 22.482 15.7908ZM13.5689 14.2781C13.1782 14.2781 12.861 14.5949 12.861 14.986C12.861 15.3767 13.1782 15.6935 13.5689 15.6935C13.9596 15.6935 14.2764 15.3767 14.2764 14.986C14.2764 14.5949 13.9596 14.2781 13.5689 14.2781ZM18.1501 14.2781C17.759 14.2781 17.4426 14.5949 17.4426 14.986C17.4426 15.3767 17.759 15.6935 18.1501 15.6935C18.5408 15.6935 18.8576 15.3767 18.8576 14.986C18.8576 14.5949 18.5408 14.2781 18.1501 14.2781Z" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => handleShare("facebook")}
          className="w-14 h-14 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] flex items-center justify-center transition hover:bg-[#4CAF50] hover:text-white"
          aria-label="Chia sẻ qua Facebook"
        >
          <FaFacebookF className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleShare("twitter")}
          className="w-14 h-14 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] flex items-center justify-center transition hover:bg-[#4CAF50] hover:text-white"
          aria-label="Chia sẻ qua Twitter"
        >
          <FaXTwitter className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleShare("linkedin")}
          className="w-14 h-14 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] flex items-center justify-center transition hover:bg-[#4CAF50] hover:text-white"
          aria-label="Chia sẻ qua LinkedIn"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleShare("reddit")}
          className="w-14 h-14 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] flex items-center justify-center transition hover:bg-[#4CAF50] hover:text-white"
          aria-label="Chia sẻ qua Reddit"
        >
          <FaRedditAlien className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
