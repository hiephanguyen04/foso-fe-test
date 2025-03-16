"use client";
import { useState } from "react";
import { SearchIcon } from "./icons";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, label }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-black text-2xl font-extrabold mb-6">{label}</h3>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full flex items-center py-3 px-4 rounded-2xl h-18 bg-white text-gray-500 shadow-sm focus:outline-none"
        />
        <button
          type="submit"
          className="absolute text-center right-1 top-3 bg-primary p-2 rounded-xl w-12 h-12 text-white"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
