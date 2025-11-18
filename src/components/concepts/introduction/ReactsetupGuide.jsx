import React from "react";

// Updated Component: ReactSetupGuide
// Includes Vite React installation comparison, Tailwind setup, folder structure explanation

export default function ReactSetupGuide() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React + Vite + Tailwind Setup Guide
      </h1>

      {/* Comparison Table */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">1. Vite React Installation – Command Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Command</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-mono">npm create vite@latest .</td>
                <td className="border px-4 py-2">Creates a Vite project in the current folder.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono">npm create vite@latest projectName</td>
                <td className="border px-4 py-2">Creates a new folder with the given project name.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed">
          After running either command, you will be prompted to:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Select a framework → <strong>React</strong></li>
          <li>Select a variant → <strong>JavaScript / TypeScript</strong></li>
          <li>You will get an option: <strong>Run npm install?</strong> (Select Yes)</li>
          <li>Then start the server using → <span className="font-mono">npm run dev</span></li>
        </ul>
      </section>

      {/* Tailwind Installation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">2. TailwindCSS Installation</h2>

        <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm">
          <p>npm install tailwindcss @tailwindcss/vite</p>
        </div>

        <h3 className="mt-4 font-semibold text-gray-700">Configure the Vite Plugin:</h3>
        <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm overflow-auto mt-2">
          <pre>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}</pre>
        </div>

        <h3 className="mt-6 font-semibold text-gray-700">Import Tailwind CSS</h3>
        <p className="text-gray-700">Add this inside <strong>App.css</strong> or <strong>index.css</strong>:</p>
        <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm mt-2">
          <pre>{`@import "tailwindcss";`}</pre>
        </div>

        <p className="mt-3 text-gray-700 leading-relaxed">
          Now you can start using Tailwind classes directly in your components.
        </p>
      </section>

      {/* Folder Structure */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-purple-600">3. Folder Structure Explanation</h2>

        <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
          <ul className="list-disc ml-6 text-gray-700">
            <li><strong>src/</strong> – Main working directory where your entire React app lives.
              <ul className="list-disc ml-6 mt-2">
                <li><strong>components/</strong> – Reusable UI elements like Buttons, Headers, Forms.</li>
                <li><strong>pages/</strong> – Page-level components (Home, About, Contact).</li>
                <li><strong>assets/</strong> – Images, icons, fonts.</li>
                <li><strong>App.jsx</strong> – Main root component.</li>
                <li><strong>main.jsx</strong> – Entry point that renders App into the DOM.</li>
              </ul>
            </li>
            <li><strong>index.html</strong> – Single HTML file of the entire app.</li>
            <li><strong>package.json</strong> – Contains scripts and dependencies.</li>
            <li><strong>vite.config.js</strong> – Vite configuration file.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}