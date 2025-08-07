import React from 'react';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onFilterChange: (category: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ categories, selectedCategory, onFilterChange }) => {
  const baseClasses = "font-bold py-2 px-4 rounded-full transition-colors duration-200";
  const inactiveClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800";
  const activeClasses = "bg-blue-500 text-white";

  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`${baseClasses} ${selectedCategory === 'all' ? activeClasses : inactiveClasses}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`${baseClasses} ${selectedCategory === category ? activeClasses : inactiveClasses}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterControls;
