import React from 'react';
import PromptCard, { Prompt } from './PromptCard';

interface PromptGridProps {
  prompts: Prompt[];
}

const PromptGrid: React.FC<PromptGridProps> = ({ prompts }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default PromptGrid;
