import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePrompts } from '../hooks/usePrompts';
import Header from '../components/Header';
import YamlDisplay from '../components/YamlDisplay';

const PromptDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { prompts, loading, error } = usePrompts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const prompt = prompts.find(p => p.id === id);

  if (!prompt) return <div>Prompt not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-8">
            <Link to="/" className="text-blue-500 hover:underline mb-6 block">&larr; Back to all prompts</Link>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-3 py-1 rounded-full">{prompt.category}</span>
            <h1 className="text-4xl font-extrabold mt-4 mb-2 text-gray-900">{prompt.title}</h1>
            <p className="text-lg text-gray-500">Tool: <span className="font-semibold text-gray-700">{prompt.tool}</span></p>
          </div>

          <p className="text-gray-700 text-lg mb-8 border-l-4 border-blue-500 pl-4">{prompt.description}</p>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Prompt Details</h2>
            <YamlDisplay data={prompt.promptData} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Raw Markdown Content</h2>
            <pre className="bg-gray-800 text-white p-6 rounded-lg text-sm overflow-x-auto">
              <code>{prompt.content}</code>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptDetailPage;
