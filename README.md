# PromptHub 🌟

Welcome to PromptHub, a curated collection of generative AI prompts, now with a sleek and modern user interface to make finding and using prompts easier than ever.

![PromptHub UI Screenshot](https://i.imgur.com/your-screenshot.png) <!-- It's a good idea to add a screenshot of the UI -->

## ✨ Features

-   **Modern UI**: A beautiful and responsive user interface built with React and Tailwind CSS.
-   **Powerful Search**: Instantly find prompts by searching through titles, descriptions, and tools.
-   **Category Filtering**: Easily filter prompts by media type, such as video, music, images, and more.
-   **Detailed Prompt View**: Click on any prompt to see its full details in a clean and readable format.
-   **Extensible**: The project is architected to be easily extensible with new prompts and categories.

## 🚀 Getting Started

To get the PromptHub UI running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/trevonerd/prompthub.git
    cd prompthub
    ```

2.  **Install dependencies for the UI:**
    ```bash
    cd prompthub-ui
    npm install
    ```

3.  **Run the data collection script:**
    Before starting the UI, you need to collect all the prompts into a single data file. From the root directory, run:
    ```bash
    npm run collect
    ```
    This will generate a `prompts.json` file in the `prompthub-ui/public` directory.

4.  **Start the development server:**
    ```bash
    cd prompthub-ui
    npm run dev
    ```
    The application should now be running at `http://localhost:5173`.

## 🛠️ Tech Stack

-   **Frontend**:
    -   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
    -   [Vite](https://vitejs.dev/) - A next-generation frontend tooling.
    -   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
    -   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
    -   [React Router](https://reactrouter.com/) - For client-side routing.
-   **Tooling**:
    -   [Node.js](https://nodejs.org/) - For the data collection script.
    -   [ESLint](https://eslint.org/) - For code linting.

## 📁 Project Structure

```
.
├── prompthub-ui/      # The React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   └── ...
├── prompts/           # Contains all the prompt markdown files
│   ├── video/
│   ├── music/
│   └── ...
├── scripts/           # Data collection scripts
│   └── collect-prompts.js
└── ...
```

## 🤝 Contributing

We welcome contributions! If you have a prompt you'd like to add, please follow these steps:

1.  Create a new markdown file in the appropriate category directory inside `prompts/` (e.g., `prompts/images/`).
2.  Follow the naming convention: `{tool}-{short-description}.md`.
3.  Use the following template for your prompt file:

    ```markdown
    # [Prompt Title]

    ## Tool
    [Name of the AI tool]

    ## Description
    [A brief description of the prompt]

    ## Prompt
    ` `` `
    [The full prompt content, preferably in a structured format like YAML]
    ` `` `
    ```

4.  Open a pull request with your new prompt.

---

*This project is a labor of love, crafted with care to provide the best possible experience for prompt engineers and AI enthusiasts.*
