import React from 'react';

function Projects() {
  const projectList = [
    { title: 'Project 1', description: 'Description for project 1', image: 'project1.jpg' },
    { title: 'Project 2', description: 'Description for project 2', image: 'project2.jpg' },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <img src={project.image} alt={project.title} className="mb-4 rounded" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-900 dark:text-gray-100">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
