import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Meal Finder Website",
      description:
        "A responsive food search website using HTML, CSS, JavaScript, TailwindCSS, and API integration.",
      tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "API"],
      link: "#",
    },
    {
      title: "Book Resort",
      description:
        "A responsive hotel/resort booking website using Bootstrap 5 and custom CSS.",
      tech: ["HTML", "Bootstrap 5", "CSS"],
      link: "#",
    },
    {
      title: "EpiRecipes Search App",
      description:
        "Full‑stack app using Python, OpenSearch, and React to search and filter recipes.",
      tech: ["Python", "OpenSearch", "React", "REST API"],
      link: "#",
    },
  ];

  return (
    <div className="w-full py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}