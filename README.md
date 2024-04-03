Project Title: Mediporta React Task
This project is a modern web application built with React, TypeScript, and Vite. It showcases the use of various libraries and tools to create a fast, efficient, and user-friendly application.

Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
Storybook: An open-source tool for developing UI components in isolation.
ESLint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
PostCSS: A tool for transforming CSS with JavaScript.
Interesting Parts
Component Development with Storybook: Components are developed in isolation using Storybook. This allows for focused development and testing of each component. Check out the stories in the src/stories directory.
TypeScript: TypeScript is used throughout the project to ensure type safety and improve developer experience.
ThemeProvider: The ThemeProvider component in src/components/theme-provider.tsx provides a way to toggle between different themes in the application.
Tag Browser Page: The TagBrowserPage component in src/tag-page/TagBrowserPage.tsx is a complex component that showcases the use of state, props, and other React concepts.
OrderToggle Component: The OrderToggle component in src/tag-page/OrderToggle.tsx is a simple, reusable component that can be used to toggle the order of items.
Vite Configuration: The vite.config.ts file contains the configuration for Vite, demonstrating how to customize the build process.
Getting Started
To get started with this project, clone the repository and install the dependencies using npm install. Then, you can start the development server using npm run dev.

Building the Project
To build the project for production, use the npm run build command. This will create a dist directory with the production-ready files.

Linting
The project uses ESLint for linting. You can run the linter using npm run lint.

Storybook
To start the Storybook server, use the npm run storybook command. This will start the Storybook server and open it in your default web browser.

Contributing
Contributions are welcome! Please read the contributing guide for more information.

License
This project is licensed under the MIT License.
