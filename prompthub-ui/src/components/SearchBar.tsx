import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search prompts..."
        className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-400">🔍</span>
      </div>
    </div>
  );
};

export default SearchBar;
