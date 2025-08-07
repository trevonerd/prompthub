import { useState, useEffect } from 'react';
import { Prompt } from '../components/PromptCard';

// A simple, safer YAML parser
const parseYamlSimple = (yamlString: string): any => {
  const data: any = {};
  if (!yamlString) return data;

  const lines = yamlString.split('\n');
  let currentKey: string | null = null;
  let isList = false;

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;

    const keyValueMatch = trimmedLine.match(/^([\w-]+):\s*(.*)/);
    if (keyValueMatch) {
      currentKey = keyValueMatch[1];
      const value = keyValueMatch[2];
      if (value) {
        data[currentKey] = value.replace(/^"|"$/g, '');
        isList = false;
      } else {
        data[currentKey] = [];
        isList = true;
      }
    } else if (isList && currentKey && trimmedLine.startsWith('-')) {
      const listItemMatch = trimmedLine.match(/^-\s*(.*)/);
      if (listItemMatch) {
        const listItem = listItemMatch[1].trim();
        // This is a very simplified parser, it does not handle nested objects well.
        data[currentKey].push(listItem.replace(/^"|"$/g, ''));
      }
    }
  }
  return data;
};


export const usePrompts = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch('/prompts.json');
        if (!response.ok) {
          throw new Error('Failed to fetch prompts');
        }
        const data = await response.json();

        const parsedPrompts = data.map((p: any) => ({
          ...p,
          promptData: parseYamlSimple(p.promptDataString),
        }));

        setPrompts(parsedPrompts);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  return { prompts, loading, error };
};
