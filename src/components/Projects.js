import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaReact, FaNodeJs, FaCss3Alt, FaPython, FaHtml5 } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      image: 'project1.jpg',
      link: '',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      image: 'project2.jpg',
      link: '',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Django', icon: <DiDjango /> },
        { name: 'HTML', icon: <FaHtml5 /> },
      ],
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Projects
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <LazyLoadImage
              src={project.image}
              alt={project.title}
              effect="blur"
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-900 dark:text-gray-100 mb-4">{project.description}</p>
            <div className="flex items-center space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-1 text-gray-900 dark:text-gray-100">
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
