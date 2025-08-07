import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import PromptGrid from '../components/PromptGrid';
import { usePrompts } from '../hooks/usePrompts';

const HomePage: React.FC = () => {
  const { prompts, loading, error } = usePrompts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const allCategories = prompts.map(p => p.category);
    return [...new Set(allCategories)];
  }, [prompts]);

  const filteredPrompts = useMemo(() => {
    return prompts
      .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
      .filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tool.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [prompts, searchQuery, selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="md:flex">
              <div className="w-full md:w-1/4 p-4">
                <SearchBar onSearch={setSearchQuery} />
                <FilterControls categories={categories} selectedCategory={selectedCategory} onFilterChange={setSelectedCategory} />
              </div>
              <div className="w-full md:w-3/4">
                <PromptGrid prompts={filteredPrompts} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
