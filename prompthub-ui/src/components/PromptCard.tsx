import React from 'react';
import { Link } from 'react-router-dom';

// Define a type for the prompt object
export interface Prompt {
  id: string;
  category: string;
  title: string;
  tool: string;
  description: string;
  promptDataString: string;
  content: string;
}


const PromptCard: React.FC<{ prompt: Prompt }> = ({ prompt }) => {
  return (
    <Link to={`/prompt/${prompt.id}`} className="block bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{prompt.title}</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{prompt.category}</span>
      </div>
      <p className="text-gray-600 mb-4">Tool: <span className="font-semibold">{prompt.tool}</span></p>
      <p className="text-gray-700 text-sm">{prompt.description}</p>
    </Link>
  );
};

export default PromptCard;
