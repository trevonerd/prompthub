import fs from 'fs/promises';
import path from 'path';

const PROMPT_CATEGORIES = ['video', 'music', 'images', 'text', 'game-assets', 'data-viz'];

async function collectPrompts() {
  const allPrompts = [];

  // Helper function to recursively find files
  async function findFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? findFiles(res) : res;
      })
    );
    return Array.prototype.concat(...files);
  }

  for (const category of PROMPT_CATEGORIES) {
    // Check if category directory exists
    try {
      await fs.access(category);
    } catch (error) {
      // If the directory doesn't exist, skip it
      continue;
    }

    const files = await findFiles(category);
    const markdownFiles = files.filter(file => file.endsWith('.md'));


    for (const file of markdownFiles) {
      const content = await fs.readFile(file, 'utf-8');
      const { title, tool, description, promptDataString } = parsePrompt(content);
      const id = path.basename(file, '.md');

      allPrompts.push({
        id,
        category,
        title,
        tool,
        description,
        promptDataString,
        content,
      });
    }
  }

  await fs.writeFile('prompthub-ui/public/prompts.json', JSON.stringify(allPrompts, null, 2));
  console.log('✅ Prompts collected successfully!');
}

function parsePrompt(content) {
  const titleMatch = content.match(/^#\s*(.*)/);
  const toolMatch = content.match(/^##\s*Tool\s*\n\s*(.*)/m);
  const descriptionMatch = content.match(/^##\s*Description\s*\n\s*(.*)/m);
  const promptDataMatch = content.match(/```(yaml|yml)?\r?\n([\s\S]+?)\r?\n```/);


  return {
    title: titleMatch ? titleMatch[1].trim() : 'Untitled',
    tool: toolMatch ? toolMatch[1].trim() : 'Unknown',
    description: descriptionMatch ? descriptionMatch[1].trim() : 'No description',
    promptDataString: promptDataMatch ? promptDataMatch[2].trim() : '',
  };
}

collectPrompts();
